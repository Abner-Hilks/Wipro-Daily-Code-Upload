import React, { useEffect, useState } from "react";
import TodoStore from "../stores/TodoStores";
import TodoActions from "../actions/TodoActions";

export default function TodoList() {
  const [todos, setTodos] = useState(TodoStore.getAll());

  useEffect(() => {
    function onChange() {
      setTodos([...TodoStore.getAll()]);
    }

    TodoStore.addChangeListener(onChange);
    return () => TodoStore.removeChangeListener(onChange);
  }, []);

  const handleDelete = (id) => {
    TodoActions.deleteTodo(id); // Dispatch delete action
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.length === 0 ? (
        <li>No todos yet</li>
      ) : (
        todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginBottom: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "300px",
              margin: "0 auto",
              border: "1px solid #ccc",
              padding: "5px 10px",
              borderRadius: "6px",
            }}
          >
            <span>{todo.text}</span>
            <button onClick={() => handleDelete(todo.id)}> Delete</button>
          </li>
        ))
      )}
    </ul>
  );
}
