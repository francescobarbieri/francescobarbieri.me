import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import SectionTitle from "../components/SectionTitle";
import ArticlesCollection from "../components/ArticlesCollection";
import { getSortedPostsData } from "../components/posts";

export default function Home(props) {
    const { allRecentPostsData } = props;

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
                <meta
                    httpEquip="content-language"
                    content="en-US"
                    data-react-helmet="true"
                />

                <link rel="canonical" href="https://francescobarbieri.blog/" />
                <link
                    rel="sitemap"
                    type="application/xml"
                    href="/sitemap.xml"
                />

                <meta
                    property="og:site_name"
                    content="Francesco Barbieri's Blog"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Francesco Barbieri's Blog" />
                <meta
                    property="og:description"
                    content="Blogging about programming, tech, actuality and human factors."
                />
                <meta
                    property="og:url"
                    content="https://francescobarbieri.blog/"
                />

                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="Francesco Barbieri's Blog"
                />
                <meta
                    name="twitter:description"
                    content="Blogging about programming, tech, actuality and human factors."
                />
                <meta
                    name="twitter:url"
                    content="https://francescobarbieri.blog/"
                />

                <meta
                    name="description"
                    content="Blogging about programming, tech, actuality and human factors."
                    key="desc"
                />

                <title>Francesco Barbieri's Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <center>
                <div className="wrapper">
                    <Navbar />
                    <section>
                        <SectionTitle title="Latest articles" icon="latest" />
                        <ArticlesCollection articles={allRecentPostsData} />
                    </section>
                    <Newsletter />
                    <Footer />
                </div>
            </center>
        </>
    );
}

export async function getStaticProps() {
    const allRecentPostsData = getSortedPostsData().slice(0, 3);
    return {
        props: {
            allRecentPostsData,
        },
    };
}
