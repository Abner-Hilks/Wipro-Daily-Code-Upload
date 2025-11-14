import { EventEmitter } from "events";
import AppDispatcher from "../dispatcher/Dispatcher";

const CHANGE_EVENT = "change";

let _todos = [];

class TodoStore extends EventEmitter {
  getAll() {
    return _todos;
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

const store = new TodoStore();

// Dispatcher logic
AppDispatcher.register((action) => {
  switch (action.actionType) {
    case "ADD_TODO":
      _todos.push({ id: Date.now(), text: action.text });
      store.emitChange();
      break;

    case "DELETE_TODO":
      _todos = _todos.filter((todo) => todo.id !== action.id);
      store.emitChange();
      break;

    default:
    // no-op
  }
});

export default store;
