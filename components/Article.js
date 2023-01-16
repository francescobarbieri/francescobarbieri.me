import Image from "next/image";
import styles from '../styles/Article.module.css';
import Link from "next/link";
import {robotoSlab} from '../components/fonts';

const Article = ({articleData, style}) => {

    return (
        <article className={[styles.article, style].join(" ")}>
            <Link href="">
                <img src={articleData.mainImg} className={styles.img} />
            </Link>
            <div className={styles.articleContent}>
                <div>
                    <div className={styles.articleHeader}>
                        <Link href="" className={styles.link}>
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
                    </button>
                </Link>
            </div>
        </article>
    );
}
 
export default Article;