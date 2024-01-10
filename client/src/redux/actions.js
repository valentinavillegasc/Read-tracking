import axios from "axios";
import { GET_BOOKS_BY_USER_ID } from "./action-types";

axios.defaults.baseURL = "http://localhost:3001";

export const getBooks = (id) => {
  return async function (dispatch) {
    try {
      const books = await axios.get(`/user/books/${id}`);
      dispatch({ type: GET_BOOKS_BY_USER_ID, payload: books.data });
    } catch (error) {
      console.log(error);
    }
  };
};
