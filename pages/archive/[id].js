import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Post.module.css";
import Link from "next/link";
import { robotoSlab } from "../../components/fonts";

const Post = () => {
    return (
        <>
            <Head>
                <title>Post Page</title>
            </Head>
            <center>
                <div className="wrapper">
                    <Navbar />
                    <section>
                        <div className={styles.postGrid}>

                            <div className={styles.header}>
                                <svg className={styles.icon}
                                    aria-hidden="true"
                                    width="64"
                                    height="64"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        d="M39 6c2.5 0 4 0 4 2v35a3 3 0 0 1-3 3H11c-2 0-2-2.34-2-4h30V6Zm-19 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                                        opacity=".2"
                                    ></path>
                                    <path d="M10 20a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H10Zm0 5a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H10Zm0 5a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H10Zm0 5a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H10ZM4 4a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v1h.91C42.61 5 44 6.31 44 7.93v36.14A3.01 3.01 0 0 1 40.91 47H11.1A3.01 3.01 0 0 1 8 44.07V43H7a3 3 0 0 1-3-3V4Zm6.06 39v1.07a1 1 0 0 0 1.03.98H40.9a1 1 0 0 0 1.03-.98V7.93a1 1 0 0 0-1.03-.98H40V40a3 3 0 0 1-3 3H10.06ZM7 3a1 1 0 0 0-1 1v36a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7Zm6.5 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0 2a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"></path>
                                </svg>
                                <div className={styles.headerContent}>
                                    <div className={styles.articleHeader}>
                                        <Link
                                            href={"/archive?tag="}
                                            className={styles.link}
                                        >
                                            <p className={styles.tag}>
                                                General
                                            </p>
                                        </Link>
                                        <p className={styles.date}>
                                            Datozza
                                        </p>
                                    </div>
                                    <h2 className={robotoSlab.className}>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt! eiusmod tempor incididunt!</h2>
                                </div>
                            </div>
                            <div className={styles.hr}/>
                            <div className={styles.body}>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <img src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=1060" />
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <div className={styles.hr}/>
                            
                        </div>
                    </section>
                    <Footer />
                </div>
            </center>
        </>
    );
};

export default Post;
