import Image from "next/image";
import styles from '../styles/Article.module.css';
import Link from "next/link";
import {robotoSlab} from '../components/fonts';

const Article = ({articleData, style}) => {

    return (
        <article className={[styles.article, style].join(" ")}>
            <div className={styles.articleContent}>
                <div>
                    <div className={styles.articleHeader}>
                        <Link href={''} className={styles.link}>
                            <p className={styles.tag}>{articleData.tag}</p>
                        </Link>
                        <p className={styles.date}>{articleData.date}</p>
                    </div>
                    <Link href="" className={styles.titleLink}>
                        <h2 className={[styles.title, robotoSlab.className].join(" ")}>{articleData.title}</h2>
                    </Link>
                    <p className={styles.preview}>{articleData.preview}</p>
                </div>
                <Link href="" className={styles.link}>
                    <button className={styles.button}>
                        Read more
                        <svg className={styles.buttonImg} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M6.41 2 5 3.41 10.59 9 5 14.59 6.41 16l7-7-7-7Z" fill="#0071E3"></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </article>
    );
}
 
export default Article;