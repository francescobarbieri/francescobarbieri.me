import Head from "next/head";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { format } from "date-fns";
import { db } from "../../components/firebase";
import { useRouter } from "next/router";
import SectionTitle from "../../components/SectionTitle";
import ArticlesCollection from "../../components/ArticlesCollection";
import SelectTag from "../../components/SelectTag";
import { Pagination } from "@mui/material";
import { getSortedPostsData } from "../../components/posts";

export default function Home(props) {


    // change this name
    const { output } = props;
    const router = useRouter();

    const [currentTag, setCurrentTag] = useState(() => {
        if (router.query["tag"]) return router.query["tag"];
        else return "All";
    });

    const [page, setPage] = useState(1);

    function pageChange(event, value) {
        setPage(value);
    }

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <title>Francesco Barbieri - Archive</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <center>
                <div className="wrapper">
                    <Navbar />
                    <section>
                        <SectionTitle title="Filter by tag" icon="search" />
                        <SelectTag
                            tags={getTags(output)}
                            handle={setCurrentTag}
                            tag={currentTag}
                            pageHandler={setPage}
                        />
                    </section>
                    <section>
                        <SectionTitle
                            title={currentTag + " articles"}
                            icon="archiveArticles"
                        />
                        <ArticlesCollection
                            articles={output
                                .filter((item) => {
                                    if (currentTag == "All") return true;
                                    else if (currentTag == item.tag)
                                        return true;
                                    else return false;
                                })
                                .slice(
                                    Math.max(0, (page - 1) * 10),
                                    page * 10 - 1
                                )}
                        />
                        <br />
                        <Pagination
                            count={Math.ceil(
                                output.filter((item) => {
                                    if (currentTag == "All") return true;
                                    else if (currentTag == item.tag)
                                        return true;
                                    else return false;
                                }).length / 9
                            )}
                            page={page}
                            onChange={pageChange}
                            variant="outlined"
                            shape="rounded"
                        />
                    </section>
                    <Newsletter />
                    <Footer />
                </div>
            </center>
        </>
    );
}

// Gestire potenziali errori da questa funzione
// Get data from Firebase Firestore
export async function getServerSideProps() {
    try {
        const q = query(collection(db, "articles"), orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);

        let output = [];

        querySnapshot.docs.map((doc) => {
            output.push({
                id: doc.id,
                date: format(doc.data().date.toDate(), "MMMM d, yyyy"),
                tag: doc.data().tag,
                title: doc.data().title,
                preview: doc.data().preview,
            });
        });

        return { props: { output } };
    } catch (e) {
        return { props: {} };
    }
}

// Extract unique tags from articles object
function getTags(output) {
    var temp = [];
    output.map((article) => {
        if (!temp.includes(article.tag)) temp.push(article.tag);
    });
    return temp;
}
