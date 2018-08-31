import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action-types";

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.payload];
    case REMOVE_ARTICLE:
      return state.filter((article) => {return article.id !== action.payload})
    default:
      return state;
  }
};

export default articleReducer;
