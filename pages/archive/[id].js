import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Post.module.css";
import Link from "next/link";
import { robotoSlab } from "../../components/fonts";
import format from "date-fns/format";
import { getAllPostIds, getPostData } from "../../components/posts";
import Newsletter from "../../components/Newsletter";

const Post = ({ postData }) => {

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
                <meta http-equip="content-language" content="en-US" data-react-helmet="true"/>

                <link rel="canonical" href={"https://francescobarbieri.blog/archive/" + postData.id}/>
                <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
                
                <meta property="og:site_name" content={postData.title + " | Francesco Barbieri's Blog"}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={postData.title + " | Francesco Barbieri's Blog"}/>
                <meta property="og:description" content={postData.preview}/>
                <meta property="og:url" content={"https://francescobarbieri.blog/archive/" + postData.id}/>
                
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content={postData.title + " | Francesco Barbieri's Blog"}/>
                <meta name="twitter:description" content={postData.preview}/>
                <meta name="twitter:url" content={"https://francescobarbieri.blog/archive/" + postData.id}/>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />

                <meta name="description" content={postData.preview} key="desc" />

                <title>{postData.title} | Francesco Barbieri's Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <center>
                <div className="wrapper">
                    <Navbar />
                    <section>
                        <div className={styles.postGrid}>
                            <div className={styles.header}>
                                <div className={styles.headerContent}>
                                    <div className={styles.articleHeader}>
                                        <Link
                                            href={
                                                "/archive?tag=" + postData.tag
                                            }
                                            className={styles.link}
                                        >
                                            <p className={styles.tag}>
                                                {postData.tag}
                                            </p>
                                        </Link>
                                        <p className={styles.date}>
                                            {format(
                                                Date.parse(postData.date),
                                                "MMMM d, yyy"
                                            )}
                                        </p>
                                    </div>
                                    <h2 className={robotoSlab.className}>
                                        {postData.title}
                                    </h2>
                                </div>
                            </div>
                            <div
                                className={styles.body}
                                dangerouslySetInnerHTML={{
                                    __html: postData.contentHtml,
                                }}
                            />
                        </div>
                    </section>
                    <Newsletter />
                    <Footer />
                </div>
            </center>
        </>
    );
};

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default Post;
