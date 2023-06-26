import styles from "../styles/Article.module.css";
import Link from "next/link";
import format from "date-fns/format";
import Image from "next/image";

const Article = ({ articleData, style }) => {

    console.log("/articlesImg/" + articleData.id + "/cover.webp");

    return (
        <article className={[styles.article, style].join(" ")}>
            <Link
                href={"/archive/" + articleData.id}>
                <div className={styles.articleImageWrapper}>
                    <img 
                        src={"/articlesImg/" + articleData.id + "/cover.webp" }
                        className={styles.articleImage}
                        alt={articleData.title + " cover."}
                    ></img>

                </div>
            </Link>
            <div className={styles.articleContent}>
                <div>
                    <div className={styles.articleHeader}>
                        <Link
                            href={"/archive?tag=" + articleData.tag}
                            className={styles.link}
                        >
                            <p className={styles.tag}>{articleData.tag}</p>
                        </Link>
                        <p className={styles.date}>
                            {format(
                                Date.parse(articleData.date),
                                "MMMM d, yyyy"
                            )}
                        </p>
                    </div>
                    <Link
                        href={"/archive/" + articleData.id}
                        className={styles.titleLink}
                    >
                        <h3
                            title={articleData.title}
                            className={styles.title}
                        >
                            {articleData.title}
                        </h3>
                    </Link>
                    <p className={styles.preview}>{articleData.preview}</p>
                </div>
                <Link
                    href={"/archive/" + articleData.id}
                    className={styles.link}
                    aria-label={articleData.title}
                >
                    <button className={styles.button}>
                        <div>Read more</div>
                        <svg
                            className={styles.buttonImg}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                        >
                            <path
                                d="M6.41 2 5 3.41 10.59 9 5 14.59 6.41 16l7-7-7-7Z"
                                fill="#0071E3"
                            ></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </article>
    );
};

export default Article;
