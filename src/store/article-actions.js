import { articleActions } from "./article";
import axios from "axios";

export const fetchArticleData = () => {
  return async (dispatch) => {
    axios
      .post(
        "https://stage-services.truemeds.in/ArticleService/getArticleListing",
        {}
      )
      .then((response) => {
        console.log("Fetched Data!", response);
        const articleData = response.data.result.article;
        dispatch(articleActions.addArticles({items: articleData}));
      })
      .catch((err) => {
        console.error("Could not fetch data!",err);
        // throw new Error(err);
      });
  };
};
