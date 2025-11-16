// challenge5/server.js
const express = require("express");
const app = express();
const PORT = 4000;

// Import modular router
const bookRouter = require("./routes/books");

app.use(express.json());

// Use modular routes
app.use("/books", bookRouter);


// (Remove after checking the output)
app.get("/causeerror", (req, res) => {
  throw new Error("Test error from bonus route");
});

// 404 handler (for any route not matched above)
app.use((req, res, next) => {
  res.status(404).send("Route not found");
});

// Centralized error handler (Bonus)
app.use((err, req, res, next) => {
  console.error("Internal Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
