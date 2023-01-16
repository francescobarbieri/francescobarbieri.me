import Image from "next/image";
import styles from '../styles/Article.module.css';
import Link from "next/link";
import {robotoSlab} from '../components/fonts';

const Article = () => {
    return (
        <article className={styles.article}>
            <Link href="">
                <Image />
            </Link>
            <div className={styles.articleContent}>
                <div>
                    <div className={styles.articleHeader}>
                        <Link href="" className={styles.link}>
                            <p className={styles.tag}>general</p>
                        </Link>
                        <p className={styles.date}>DECEMBER 12, 2022</p>
                    </div>
                    <Link href="" className={styles.titleLink}>
                        <h2 className={[styles.title, robotoSlab.className].join(" ")}>Beyond Git: The other version control systems developers use</h2>
                    </Link>
                    <p className={styles.preview}>Machine learning uses data structures that don't always resemble the ones used in standard computing. You'll need to process your data first if you want efficient machine learning.</p>
                </div>
                <Link href="">
                    <button className={styles.button}>
                        Read more
                    </button>
                </Link>
            </div>
        </article>
    );
}
 
export default Article;