const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

// Bonus part: /status route
app.get("/status", (req, res) => {
  res.json({ server: "running", uptime: "OK" });
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
