import { legacy_createStore as createStore } from "redux";
import booksData from "../data/books";

const initialState = { books: booksData };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOK":
      return { ...state, books: [...state.books, action.payload] };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
