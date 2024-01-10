import { GET_BOOKS_BY_USER_ID } from "./action-types";

const initialState = {
  user: {},
  allBooks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_BY_USER_ID:
      return { ...state, allBooks: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
