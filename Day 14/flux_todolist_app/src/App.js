import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Flux Todo List</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
