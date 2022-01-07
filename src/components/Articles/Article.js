import classes from "./Article.module.css";

const Article = (props) => {
  const handleArticleClick = () => {
    props.onArticleClick(props.article.id);
  };

  return (
    <div
      key={props.article.id}
      onClick={() => handleArticleClick()}
      className={classes["article"]}
    >
      <div className={classes["article-metadata-container"]}>
        <div>{props.article.author}</div>
        <div>{props.article.createdOn}</div>
      </div>
      <h3 className={classes["article-title"]}>{props.article.name}</h3>
      <div className={classes["article-metadata-container"]}>
        Category: {props.article.categoryName}
      </div>
      {props.isArticleOpen ? <p>{props.article.description}</p> : ""}
    </div>
  );
};

export default Article;
