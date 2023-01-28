import Article from './Article';
import styles from '../styles/ArticlesCollection.module.css';

const ArticlesCollection = ({articles}) => {

    return (
        <div className={styles.articlesContainer}>
            {
                articles.map((article) => (
                    <Article articleData={article} />
                ))
            }
        </div>
    );
}
 
export default ArticlesCollection;