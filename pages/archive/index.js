import Head from "next/head";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import SectionTitle from "../../components/SectionTitle";
import ArticlesCollection from "../../components/ArticlesCollection";
import SelectTag from "../../components/SelectTag";
import { Pagination } from "@mui/material";
import { getSortedPostsData } from "../../components/posts"; 
import { makeStyles } from "@mui/styles";

export default function Home(props) {

    const { allPostData } = props;
    const router = useRouter();

    const [currentTag, setCurrentTag] = useState(() => {
        if (router.query["tag"]) return router.query["tag"];
        else return "All";
    });

    const [page, setPage] = useState(1);

    const useStyle = makeStyles(() => ({
        root: {
            '& .MuiPaginationItem-root': {
                color: "#9b9b9b",
            }
        }
    }));
    const classes = useStyle();

    function pageChange(event, value) {
        setPage(value);
    }

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
                <meta http-equip="content-language" content="en-US" data-react-helmet="true"/>

                <link rel="canonical" href="https://francescobarbieri.blog/archive"/>
                <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
                
                <meta property="og:site_name" content="Archive | Francesco Barbieri's Blog"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Archive | Francesco Barbieri's Blog"/>
                <meta property="og:description" content="A repository for all my blog posts about programming, tech, actuality and human factors."/>
                <meta property="og:url" content="https://francescobarbieri.blog/archive"/>
                
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content="Archive | Francesco Barbieri's Blog"/>
                <meta name="twitter:description" content="A repository for all my blog posts about programming, tech, actuality and human factors."/>
                <meta name="twitter:url" content="https://francescobarbieri.blog/archive"/>

                <meta name="description" content="A repository for all my blog posts about programming, tech, actuality and human factors." key="desc" />

                <title>Archive | Francesco Barbieri's Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <center>
                <div className="wrapper">
                    <Navbar />
                    <section>
                        <SectionTitle title="Filter by tag" icon="search" />
                        <SelectTag
                            tags={getTags(allPostData)}
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
                            articles={allPostData
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
                                allPostData.filter((item) => {
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
                            color="primary"
                            classes={{ root: classes.root }}
                        />
                    </section>
                    <Newsletter />
                    <Footer />
                </div>
            </center>
        </>
    );
}

export async function getStaticProps() {
    const allPostData = getSortedPostsData();
    return {
        props: {
            allPostData,
        },
    };
}

// Extract unique tags from object
function getTags(allPostData) {
    var temp = [];
    allPostData.map((article) => {
        if (!temp.includes(article.tag)) temp.push(article.tag);
    });
    return temp;
}
