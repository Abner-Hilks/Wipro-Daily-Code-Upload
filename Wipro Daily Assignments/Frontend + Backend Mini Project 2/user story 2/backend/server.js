// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// In-memory product data (acts as JSON data)
let products = [
  { id: 1, name: "Laptop", price: 55000, category: "Electronics", description: "Fast laptop with 16GB RAM" },
  { id: 2, name: "Running Shoes", price: 2000, category: "Fashion", description: "Comfortable running shoes" },
  { id: 3, name: "Ergo Chair", price: 1500, category: "Furniture", description: "Ergonomic office chair" },
  { id: 4, name: "Smartphone", price: 30000, category: "Electronics", description: "6.5 inch display, 128GB" }
];

// GET /products - return all products
app.get("/products", (req, res) => {
  res.json(products);
});

// GET /products/:id - return single product or 404
app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json(product);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
