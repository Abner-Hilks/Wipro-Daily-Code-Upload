import React from "react";
import "./App.css";
import ProductList from "./features/products/productList";

function App() {
  return (
    <div className="App">
      <h1>Redux Product Management</h1>
      <ProductList />
    </div>
  );
}

export default App;
