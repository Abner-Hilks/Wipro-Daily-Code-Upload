const express = require("express");
const app = express();

// Global Logging Middleware with timestamp bonus part
app.use((req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`[${req.method}] ${req.url} - ${time}`);
  next();
});

// Example routes
app.get("/products", (req, res) => {
  res.send("Products Route");
});

app.get("/status", (req, res) => {
  res.send("Server Status OK");
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
