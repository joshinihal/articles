import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import classes from "./Articles.module.css";
import Article from "./Article";

const Articles = (props) => {
  const articles = useSelector((state) => {
    return state.article.items;
  });
  const [openArticle, setOpenArticle] = useState(null);

//   on load no article should be open
  useEffect(() => {
    setOpenArticle(null);
  }, []);

//   close open article or open new
  const handleArticleClick = (id) => {
    setOpenArticle((prev) => {
      if (id === prev) {
        return null;
      } else {
        return id;
      }
    });
  };

  return (
    <>
      {articles && articles.length ? (
        <div className={classes["articles-container"]}>
          <h2>Articles</h2>
          {articles.map((article) => (
            <Article
              key={article.id}
              isArticleOpen={openArticle === article.id}
              onArticleClick={handleArticleClick}
              article={article}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Articles;
