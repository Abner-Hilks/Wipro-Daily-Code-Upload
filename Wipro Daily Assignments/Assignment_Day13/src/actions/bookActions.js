// Book Actions: define all user-driven events dispatched to the store

import BookDispatcher from "../dispatcher/bookDispatcher";

const BookActions = {
  loadBooks(books) {
    BookDispatcher.dispatch({
      type: "LOAD_BOOKS",
      payload: books,
    });
  },

  addBook(book) {
    BookDispatcher.dispatch({
      type: "ADD_BOOK",
      payload: book,
    });
  },
};

export default BookActions;
