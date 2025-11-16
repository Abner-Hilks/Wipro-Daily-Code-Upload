const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  const name = req.query.name;

  if (name) {
    // Bonus part: JSON format
    return res.json({ query: name });
  }

  res.send("Please provide a product name");
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
