import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action-types";

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});

export const removeArticle = article => ({
  type: REMOVE_ARTICLE,
  payload: article
});
