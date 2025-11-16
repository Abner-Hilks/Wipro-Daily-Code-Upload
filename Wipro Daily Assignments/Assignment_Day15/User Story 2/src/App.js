import React from "react";
import "./App.css";
import OfflineBanner from "./components/OfflineBanner";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <OfflineBanner />
      <Header />
      <Content />
    </div>
  );
}

export default App;
