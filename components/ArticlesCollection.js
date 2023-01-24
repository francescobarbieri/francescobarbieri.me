import Article from "./Article";
import styles from "../styles/ArticlesCollection.module.css";
import { Pagination } from "@mui/material";
import { useState } from "react";

const ArticlesCollection = ({articles, pages}) => {
    const [page, setPage] = useState(1);

    const changePage = (event, value) => {
        setPage(value);
    }

    if(pages)
    {
        const currentPage = 1;
        const pagesNumber = Math.ceil(Object.keys(articles).length / 12);

        return (
            <div className={styles.paginationContainer}>
                <Pagination
                    count={pagesNumber}
                    variant="outlined"
                    shape="rounded"
                    page={page}
                    onChange={changePage}
                />
            </div>
        )
    }
    else {
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
}
 
export default ArticlesCollection;