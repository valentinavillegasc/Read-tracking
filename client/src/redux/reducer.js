import { GET_BOOKS_BY_USER_ID, GET_BOOK_BY_ID } from "./action-types";

const initialState = {
  user: {},
  allBooks: [],
  book: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_BY_USER_ID:
      return { ...state, allBooks: action.payload };
    case GET_BOOK_BY_ID:
      return { ...state, book: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
