import Head from "next/head";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";
import styles from "../styles/About.module.css";

export default function About() {
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
                    http-equip="content-language"
                    content="en-US"
                    data-react-helmet="true"
                />

                <link
                    rel="canonical"
                    href="https://francescobarbieri.blog/about"
                />
                <link
                    rel="sitemap"
                    type="application/xml"
                    href="/sitemap.xml"
                />

                <meta
                    property="og:site_name"
                    content="About me | Francesco Barbieri's Blog"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="About me | Francesco Barbieri's Blog"
                />
                <meta
                    property="og:description"
                    content="Blogging about programming, tech, actuality and human factors."
                />
                <meta
                    property="og:url"
                    content="https://francescobarbieri.blog/about"
                />

                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="About me | Francesco Barbieri's Blog"
                />
                <meta
                    name="twitter:description"
                    content="Blogging about programming, tech, actuality and human factors."
                />
                <meta
                    name="twitter:url"
                    content="https://francescobarbieri.blog/about"
                />

                <meta
                    name="description"
                    content="Blogging about programming, tech, actuality and human factors."
                    key="desc"
                />

                <title>About | Francesco Barbieri's Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <center>
                <main className="wrapper">
                    <Navbar />
                    <section>
                        <div className={styles.container}>
                            <SectionTitle title="About me" icon="about" />
                            <p className={styles.aboutText}>
                                Hey, I'm Francesco an Italian software
                                developer.
                                <br />
                                <br />
                                I currently live near Milan, in the north of
                                Italy. I was weaned as a software developer on
                                school, starting with my first computer, an old
                                Toshiba laptop my grandfather left me when I was
                                young. I've also spent significant time writing
                                PHP, Javascript and Java code in personal and/or
                                University projects. Currently learning Python
                                and System Design in my free time.
                                <br />
                                <br />
                                I have a particular interest in the human side
                                of computers and the ways we interact with them.
                                They are fascinating machines, but they have
                                many implications that we often tend to forget.
                                <br />
                                <br />
                                Currently I'm a third year CS student and I will
                                graduate this year. Actively searching for a
                                prestigious internship.
                            </p>
                            <h3 className={styles.subsection}>
                                Why do you blog?
                            </h3>
                            <p className={styles.aboutText}>
                                To get better at expressing toughts, feeling and
                                writing. But also because I felt the need to
                                track all of my progress in software development
                                - whatever topic I'm working on. Lastly I think
                                that researching things I find interesting and
                                then re-elaborate on them can help give me more
                                clarity in thoughts.
                                <br />
                                <br />
                                In this blog I'm going to publish tech, coding,
                                finance, investing and actuality posts.
                                <br />
                                <br />
                                If you have any questions, feel free to reach
                                out to me using the contacts below.
                            </p>
                            <h3 className={styles.subsection}>
                                More info about me
                            </h3>
                            <ul className={styles.aboutText}>
                                <li>I stared this blog in February 2023</li>
                                <li>
                                    I love listening to rock and classical
                                    music. Strange duo? It depends on my mood.
                                </li>
                                <li>
                                    My unsorted passion list contains: reading,
                                    writing, learning, science, walking and cars
                                    (especially Formula1)
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <div className={styles.container}>
                            <SectionTitle title="Readings" icon="readings" />
                            <p className={styles.aboutText}>
                                This list was last updated in{" "}
                                <b>February 2023.</b>
                            </p>

                            <div className={styles.book}>
                                <svg
                                    className={[styles.svg, "svg-icon"].join(
                                        " "
                                    )}
                                    aria-hidden="true"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                >
                                    <path d="M2 3c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a1 1 0 1 0 0 2h1v-1h4v1h5a2 2 0 0 0 2-2v1a2 2 0 0 1-2 2H9v2l-2-1-2 1v-2H4a2 2 0 0 1-2-2V3Z"></path>
                                </svg>
                                <div>
                                    <a
                                        className={styles.bookTitle}
                                        href="https://www.amazon.it/Persuasive-Technology-Using-Computers-Change/dp/1558606432"
                                        target="_blank"
                                    >
                                        Persuasive Technology - B.J. Fogg
                                    </a>
                                    <p className={styles.bookDescr}>
                                        Dr. B.J. Fogg is the director of the
                                        Persuasive Technology Lab at Stanford
                                        University. In this book, based on 9
                                        years of researches in capotology, he
                                        reveals how different interfaces can be
                                        used to change people's attitude and
                                        behaviour.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.book}>
                                <svg
                                    className={[styles.svg, "svg-icon"].join(
                                        " "
                                    )}
                                    aria-hidden="true"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                >
                                    <path d="M2 3c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a1 1 0 1 0 0 2h1v-1h4v1h5a2 2 0 0 0 2-2v1a2 2 0 0 1-2 2H9v2l-2-1-2 1v-2H4a2 2 0 0 1-2-2V3Z"></path>
                                </svg>
                                <div>
                                    <a
                                        className={styles.bookTitle}
                                        href="https://www.amazon.it/gp/product/1594203008/ref=dbs_a_def_rwt_bibl_vppi_i1"
                                        target="_blank"
                                    >
                                        The Filter Bubble - Eli Pariser
                                    </a>
                                    <p className={styles.bookDescr}>
                                        An eye-opening book of how the hidden
                                        rise of personalization on the Internet
                                        is controlling and limiting the
                                        information we consume. This new trend
                                        undermines the Internet's original
                                        purpose as an open platform for the
                                        spread of ideas and could live us all in
                                        an isoleted echoing world.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </main>
            </center>
        </>
    );
}
