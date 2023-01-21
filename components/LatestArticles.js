import styles from '../styles/LatestArticles.module.css';
import Article from './Article';

const LatestArticles = ({articles}) => {
    
    return (
        <div className={styles.latestGrid}>
            {
                articles.map( article => (
                    <Article key={article.id} articleData={article} style={styles.article}/>
                ))
            }
        </div>
    );
}

export default LatestArticles;