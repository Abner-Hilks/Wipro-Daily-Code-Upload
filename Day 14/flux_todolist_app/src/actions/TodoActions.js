import AppDispatcher from "../dispatcher/Dispatcher";

const TodoActions = {
  addTodo(todoText) {
    AppDispatcher.dispatch({
      actionType: "ADD_TODO",
      text: todoText,
    });
  },

  deleteTodo(id) {
    AppDispatcher.dispatch({
      actionType: "DELETE_TODO",
      id: id,
    });
  },
};

export default TodoActions;
