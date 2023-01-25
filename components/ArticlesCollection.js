import Article from "./Article";
import styles from "../styles/ArticlesCollection.module.css";
import { Pagination } from "@mui/material";
import { useState } from "react";
import { robotoSlab } from "./fonts";

const ArticlesCollection = (props) => {
    const {articles} = props;
    const {pages} = props;
    const {currentTag} = props;

    const [page, setPage] = useState(1);

    const changePage = (event, value) => {
        setPage(value);
    }

    // const currentPage = 1;
    // const pagesNumber = Math.ceil(Object.keys(articles).length / 12);

    /*
    {
        articles.map( article => (
            <Article key={article.id} articleData={article} />
        ))
    }
    <Pagination
        count={pagesNumber}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={changePage}
    />
    */

    return (
        <>
            <Header currentTag={currentTag}/>
            <div className={styles.articlesCollection}>
                {
                    articles.map( article => {
                        if(!currentTag || currentTag === 'All')
                        {
                            return (<Article key={article.id} articleData={article} />)
                        }
                        else if (article.tag === currentTag)
                        {
                            return (<Article key={article.id} articleData={article} />)
                        }
                    })
                }
            </div>
        </>
    );
}
 
export default ArticlesCollection;

const Header = ({currentTag}) => {
    if(currentTag)
    {
        return (
        <p className={[styles.sectiontitle, robotoSlab.className].join(" ")}>{currentTag} articles</p>
        )
    }
    else
    {
        return (
        <p className={[styles.sectiontitle, robotoSlab.className].join(" ")}>All articles</p>
        )
    }
}