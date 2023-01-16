import Article from "./Article";
import styles from "../styles/ArticlesCollection.module.css"

const ArticlesCollection = () => {

    const articles = [
        {
            id: "articleID",
            date: "december 12, 1291",
            tag: "general",
            title: "Getting your data in shape for machine learning",
            preview: "Machine learning uses data structures that don't always resemble the ones used in standard computing. You'll need to process your data first if you want efficient machine learning.",
            mainImg: "https://firebasestorage.googleapis.com/v0/b/francescobarbieri-73605.appspot.com/o/maxresdefault.jpg?alt=media"
        },
        {
            id: "articleID",
            date: "december 12, 2056",
            tag: "general",
            title: "The Winter/Summer Bash 2022 Hat Cafe is now closed!",
            preview: "We had fun celebrating Winter Bash 2022 with you all! While we’ve closed our cafe, let’s look at a few highlights and hat-wearing avatars that brought us joy this holiday season.",
            mainImg: "https://firebasestorage.googleapis.com/v0/b/francescobarbieri-73605.appspot.com/o/maxresdefault.jpg?alt=media"
        },
        {
            id: "articleID",
            date: "december 12, 3085",
            tag: "general",
            title: "Stack Gives Back 2022!",
            preview: "Let’s start the year on a high note! We’re excited to announce our 14th Stack Gives Back.",
            mainImg: "https://firebasestorage.googleapis.com/v0/b/francescobarbieri-73605.appspot.com/o/maxresdefault.jpg?alt=media"
        },

    ]

    return (
        <div className={styles.articlesCollection}>
            {
                articles.map( article => (
                    <Article key={article.id} articleData={article} />
                ))
            }
        </div>
    );
}
 
export default ArticlesCollection;