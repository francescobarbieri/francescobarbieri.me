import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postDirectory);

    const allPostsData = fileNames.map((filename) => {
        const id = encodeURI(filename.replace(/\.md$/, ""));

        const fullPath = path.join(postDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postDirectory);

    return fileNames.map((filename) => {
        return {
            params: {
                id: encodeURI(filename.replace(/\.md$/, "")),
            },
        };
    });
}

export function getPostData(id) {
    const decodedId = decodeURI(id);
    const fullPath = path.join(postDirectory, `${decodedId}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const processedContent = marked.parse(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
