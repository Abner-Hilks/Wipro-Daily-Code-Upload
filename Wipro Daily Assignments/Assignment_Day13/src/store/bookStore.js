
// BookStore: Maintains app state (list of books) and handles dispatched actions

import { EventEmitter } from "events";
import BookDispatcher from "../dispatcher/bookDispatcher";

class BookStore extends EventEmitter {
  constructor() {
    super();
    this.books = [];
    this.loading = true;

    // Register actions from dispatcher
    BookDispatcher.register((action) => {
      switch (action.type) {
        case "LOAD_BOOKS":
          this.books = action.payload;
          this.loading = false;
          this.emit("change");
          break;

        case "ADD_BOOK":
          this.books = [...this.books, action.payload];
          this.emit("change");
          break;

        default:
          break;
      }
    });
  }

  getBooks() {
    return this.books;
  }

  isLoading() {
    return this.loading;
  }
}

const bookStore = new BookStore();
export default bookStore;
