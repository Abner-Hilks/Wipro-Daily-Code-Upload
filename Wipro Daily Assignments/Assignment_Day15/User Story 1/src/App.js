// src/App.js
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Header from "./components/Header";
import Content from "./components/Content";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default App;
