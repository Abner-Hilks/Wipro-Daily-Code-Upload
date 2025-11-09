import React from "react";
import "./App.css";
import CourseList from "./components/courseList";

function App() {
  return (
    <div className="App" style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
      <h1>Course Management App</h1>
      <CourseList />
    </div>
  );
}

export default App;
