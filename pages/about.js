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
                                My goal is to be a protagonist in the ongoing digital transformation that is changing the world, aiming to make a positive and meaningful impact on people's lives.
                                <br />
                                <br />
                                Hey, I'm Francesco a dedicated software engineer from Italy. I currently live near <a target="_blank" href="https://goo.gl/maps/UrESveMuzfPuxf5E8">Milan</a>, in the northern part of the country. My passion for software and technology was nurtured during my school years, sparked by the first computer I owned: an old Toshiba laptop gifted to me by my grandfather. Throughout personal and university projects, I have gained valuable experience in . Currently, I am expanding my knowledge by learning Python and exploring Machine Learning in my spare time.
                            </p>
                            <div className={styles.quoteContainer}>
                                <center>
                                    <svg aria-hidden="true" className={[styles.quoteImage, "svg-icon"].join(" ")}  viewBox="0 0 196 196"><path d="M179 117c25-37-1.64-84.07-12.32-89.61a110.68 110.68 0 0 1-9.18-5.5C146.58 14.87 135.91 8 96.36 6.14 46.4 3.8 37.07 17.6 21.43 44.9 5.8 72.18-8.8 126.79 16.88 162.39c20.6 28.56 51.15 26.82 82.83 25.02 7.8-.44 15.67-.9 23.47-.9 33.65 0 36.8-13.4 41.35-32.78 2.54-10.8 5.52-23.48 14.47-36.73Zm-58-83a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM78 164.28a7.33 7.33 0 0 1 7.5-7.28 7.35 7.35 0 0 1 7.47 6.58V167H78v-2.72Zm0-8.58V140h14.97v15.67A11.65 11.65 0 0 0 85.5 153c-2.87 0-5.49 1-7.5 2.7ZM57.5 153c-2.87 0-5.49 1-7.5 2.7V140h15v15.7a11.63 11.63 0 0 0-7.5-2.7Zm0 4c4.23 0 7.5 3.26 7.5 7.28V167H50v-2.72a7.33 7.33 0 0 1 7.5-7.28ZM50 107h42.97v29H78v-14.01a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2V136H50v-29Zm0-4V86a2 2 0 1 0-4 0v27H35V84.56a12 12 0 0 1 10.83-12.02 4 4 0 0 0 .43.4c.59.48 1.32.83 2.06 1.1 1.49.55 3.5.96 5.74 1.27 4.54.63 10.52.9 16.46.83 5.93-.06 11.91-.45 16.45-1.16 2.25-.36 4.25-.81 5.74-1.39a7.38 7.38 0 0 0 2.05-1.14c.12-.1.25-.22.37-.35 1.85.32 3.7 1.43 5.66 3.12a58.91 58.91 0 0 1 4.42 4.4c.79.83 1.58 1.68 2.41 2.52L119 93.67v.51l-6.81 6.87-15.77-15.96a2 2 0 0 0-1.44-.59h-.01a2 2 0 0 0-2 2V103H50Zm-5.75 22.44A4.73 4.73 0 0 0 46 122v-5H35v5.04c0 2.6 2.49 4.99 5.3 4.99a6.1 6.1 0 0 0 3.95-1.59ZM119 99.86l-4 4.03 4 4.05v-8.08Zm4 10.72a5.05 5.05 0 0 0 4.25-8.55h-.01l-4.24-4.3v12.85ZM145.05 50H123v29h22V52.5c0-.16.02-.31.05-.46V50ZM164 55h-15v25.54c.03.15.05.3.05.46v3H164V55Zm-72 1.01v13.5c-.16.1-.4.22-.75.35-1.08.43-2.75.83-4.9 1.17-4.28.67-10.05 1.05-15.87 1.11-5.82.06-11.6-.2-15.87-.79-2.16-.3-3.82-.66-4.9-1.06a5.12 5.12 0 0 1-.72-.31V56c0-11.73 9.42-21 21.1-21C82 35 91.82 44.18 92 56.01Z" opacity=".07"></path><path d="M72.25 35.38c-12.54 0-22.57 10.34-22.57 22.92v13.78c0 5.1 45.29 5.1 45.29 0V58.3c-.15-12.73-10.33-22.92-22.72-22.92ZM58.4 62.8l.14-4.49c0-7.64 6.05-13.78 13.57-13.78 7.53 0 13.57 6.14 13.57 13.78v4.5c-5.75 1.64-21.68 1.8-27.28 0Zm96.16-3.8a2.56 2.56 0 0 1-2.56-2.56c0-1.35-1.1-2.44-2.44-2.44H129a2 2 0 0 0-2 2v26a5 5 0 0 0 5 5h17.5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 0 2.5 2.5H167a5 5 0 0 0 5-5V64a5 5 0 0 0-5-5h-12.44Zm-89.7 40h19.28c2.67 0 4.86-2.03 4.86-4.5S86.8 90 84.14 90H64.86C62.19 90 60 92.03 60 94.5s2.2 4.5 4.86 4.5Z" opacity=".2"></path><path d="M61.7 84c-3.6 0-6.7 2.85-6.7 6.5s3.1 6.5 6.7 6.5h18.6a6.83 6.83 0 0 0 6.7-6.5c0-3.65-3.1-6.5-6.7-6.5H61.7ZM59 90.5c0-1.29 1.14-2.5 2.7-2.5h18.6c1.53 0 2.66 1.18 2.7 2.44A2.83 2.83 0 0 1 80.3 93H61.7c-1.56 0-2.7-1.21-2.7-2.5ZM86 58v-2c0-8.9-7.03-16-15.9-16C61.24 40 54 47.07 54 56v2a2 2 0 0 0-2 2c0 1.03.58 1.75 1.06 2.16.47.41 1.05.7 1.58.9 1.09.43 2.5.75 4.06.98 3.13.48 7.24.71 11.3.71 4.06 0 8.17-.23 11.3-.7a20.5 20.5 0 0 0 4.06-.98c.53-.21 1.1-.5 1.58-.9A2.85 2.85 0 0 0 88 60a2 2 0 0 0-2-2ZM70.1 44C76.72 44 82 49.29 82 56v3.86c-.4.08-.83.16-1.3.23-2.87.44-6.76.66-10.7.66-3.94 0-7.83-.22-10.7-.66-.47-.07-.9-.15-1.3-.23V56c0-6.68 5.42-12 12.1-12ZM121 30a7 7 0 0 0-2 13.71v44.27l-8.53-8.65a113.7 113.7 0 0 1-2.12-2.22c-1.55-1.65-3.24-3.45-4.95-4.92-2.1-1.82-4.57-3.45-7.4-4V55.97C95.8 41.81 84.05 31 70.1 31A24.94 24.94 0 0 0 45 56v12.6a16 16 0 0 0-14 15.96v37.48c0 5.04 4.52 8.99 9.3 8.99a10 10 0 0 0 5.7-1.87V169c0 1.1.9 2 2 2h19a2 2 0 0 0 2-2v-45.01h5V169c0 1.1.9 2 2 2h19a2 2 0 0 0 2-2v-4.72c0-.3-.01-.58-.03-.87v-25.04a2 2 0 0 0 0-.74v-46.3l20.39 20.64c.5.51 1.06.95 1.64 1.31V169a2 2 0 1 0 4 0v-54.4a9.05 9.05 0 0 0 7.09-15.39L123 92.03V83h22.05v3c0 1.1.9 2 2 2H166a2 2 0 0 0 2-2V53a2 2 0 0 0-2-2h-16.95v-3a2 2 0 0 0-2-2H123v-2.29A7 7 0 0 0 121 30Zm-3 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM78 167v-2.72a7.33 7.33 0 0 1 7.5-7.28 7.35 7.35 0 0 1 7.47 6.58V167H78Zm7.5-14c-2.87 0-5.49 1-7.5 2.7V140h14.97v15.67A11.65 11.65 0 0 0 85.5 153ZM65 155.7a11.63 11.63 0 0 0-7.5-2.7c-2.87 0-5.49 1-7.5 2.7V140h15v15.7Zm-15 8.58a7.33 7.33 0 0 1 7.5-7.28c4.23 0 7.5 3.26 7.5 7.28V167H50v-2.72ZM50 136v-29h42.97v29H78v-14.01a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2V136H50Zm42.97-33H50V86a2 2 0 1 0-4 0v27H35V84.56a12 12 0 0 1 10.83-12.02 4 4 0 0 0 .43.4c.59.48 1.32.83 2.06 1.1 1.49.55 3.5.96 5.74 1.27 4.54.63 10.52.9 16.46.83 5.93-.06 11.91-.45 16.45-1.16 2.25-.36 4.25-.81 5.74-1.39a7.38 7.38 0 0 0 2.05-1.14c.12-.1.25-.22.37-.35 1.85.32 3.7 1.43 5.66 3.12a58.91 58.91 0 0 1 4.42 4.4c.79.83 1.58 1.68 2.41 2.52L119 93.67v.51l-6.81 6.87-15.77-15.96a2 2 0 0 0-1.44-.59h-.01a2 2 0 0 0-2 2V103ZM46 121.99c0 1.22-.62 2.46-1.75 3.45a6.15 6.15 0 0 1-3.94 1.59c-2.82 0-5.31-2.39-5.31-5V117h11v4.99Zm69-18.1 4-4.03v8.08l-4-4.05Zm12.25 5.26a4.95 4.95 0 0 1-4.25 1.43V97.73l4.24 4.3a5.05 5.05 0 0 1 0 7.12ZM123 50h22.05v2.04c-.03.15-.05.3-.05.46V79h-22V50Zm26 5h15v29h-14.95v-3c0-.16-.02-.31-.05-.46V55ZM70.1 35c11.89 0 21.72 9.18 21.9 21.01v13.5c-.16.1-.4.22-.75.35-1.08.43-2.75.83-4.9 1.17-4.28.67-10.05 1.05-15.87 1.11-5.82.06-11.6-.2-15.87-.79-2.16-.3-3.82-.66-4.9-1.06a5.12 5.12 0 0 1-.72-.31V56c0-11.73 9.42-21 21.1-21ZM174 119a2 2 0 0 1 2 2v4h4a2 2 0 1 1 0 4h-4v4a2 2 0 1 1-4 0v-4h-4a2 2 0 1 1 0-4h4v-4c0-1.1.9-2 2-2ZM29 39l-4-4-4 4 4 4 4-4Zm117.5 130 8.5 8.5-8.5 8.5-8.5-8.5 8.5-8.5Zm-2.83 8.5 2.83 2.83 2.83-2.83-2.83-2.83-2.83 2.83Z"></path></svg>
                                    <p className={styles.quoteText}>
                                        “Tech enthusiast. Passionate learner. Future's explorer and innovator.”
                                    </p>
                                </center>                            
                            </div>
                            <p className={styles.aboutText}>
                                I have a particular interest in the human-computer interaction and the profound impact it has on our lives. Computers are fascinating machines with far-reaching implications that are often overlooked. This aspect has become a focal point of my exploration, driven by curiosity and a desire to understand the intricate relationship between humans and technology.
                                <br />
                                <br />
                                I am currently in my third year as a computer science student and I will graduate this year. With an enthusiastic drive to excel, I am actively seeking prestigious internship opportunities to apply my skills and contribute to meaningful projects.
                                </p>
                            <br />
                            <h3 className={styles.subsection}>
                                Why do I blog?
                            </h3>
                            <p className={styles.aboutText}>
                                There are several reasons that drive me to share my thoughs and experiences. Firstly, blogging allows me to refine my skills in expressing ideas through the written word; it serves as a "personal trainer" towards becoming a more effective communicator.
                                <br />
                                <br />
                                Moreover, blogging provides me the opportunity to track my learning and critical thinking growth in the ever-evolving field of technology, while creating a valuable resource for both myself and others. Additionally, I find that researching into topics that grab my interest and re-leaborating on them through blog psots, brings greater clarity to my thought. It allows me to have deeper understandings and develop more perspectives.
                            </p>
                            <br />
                            <h3 className={styles.subsection}>
                                More info about me
                            </h3>
                            <ul className={styles.aboutText}>
                                <li>I started this blog in February 2023</li>
                                <li>
                                    I enjoy a diverse tast in music: rock and classical, depending on the mood
                                </li>
                                <li>
                                    My unsorted passion list contains: reading, writing, space exploration and Formula1 
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
