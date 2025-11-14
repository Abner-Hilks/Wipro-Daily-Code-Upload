// src/App.js
import React, { useState, useEffect } from "react";
import AppDispatcher from "./Dispatcher";
import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

// Store (holds todos)
const TodoStore = new EventEmitter();
let _todos = [];

TodoStore.getAll = () => _todos;

TodoStore.addChangeListener = (callback) => {
  TodoStore.on(CHANGE_EVENT, callback);
};

TodoStore.removeChangeListener = (callback) => {
  TodoStore.removeListener(CHANGE_EVENT, callback);
};

TodoStore.emitChange = () => {
  TodoStore.emit(CHANGE_EVENT);
};

// Dispatcher (listens for actions)
AppDispatcher.register((action) => {
  switch (action.type) {
    case "ADD_TODO":
      _todos.push(action.text);
      TodoStore.emitChange();
      break;
    case "DELETE_TODO":
      _todos.splice(action.index, 1);
      TodoStore.emitChange();
      break;
    default:
    // do nothing
  }
});

// Main React Component (View)
export default function App() {
  const [todos, setTodos] = useState(TodoStore.getAll());
  const [input, setInput] = useState("");

  // listen for store changes
  useEffect(() => {
    const handleChange = () => setTodos([...TodoStore.getAll()]);
    TodoStore.addChangeListener(handleChange);
    return () => TodoStore.removeChangeListener(handleChange);
  }, []);

  // dispatch actions
  const addTodo = () => {
    if (!input.trim()) return;
    AppDispatcher.dispatch({ type: "ADD_TODO", text: input });
    setInput("");
  };

  const deleteTodo = (index) => {
    AppDispatcher.dispatch({ type: "DELETE_TODO", index });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Simple Flux Todo Flow</h2>
      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((todo, i) => (
          <li
            key={i}
            style={{
              marginBottom: "8px",
              border: "1px solid #ccc",
              width: "200px",
              margin: "0 auto",
              padding: "4px",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{todo}</span>
            <button onClick={() => deleteTodo(i)}></button>
          </li>
        ))}
      </ul>
    </div>
  );
}
