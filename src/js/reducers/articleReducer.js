import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action-types";

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.payload];
    case REMOVE_ARTICLE:
      let articles = []
      state.forEach((article) => {
        if (article.id != action.payload) articles.push(article)
      })
      return articles;
    default:
      return state;
  }
};

export default articleReducer;
