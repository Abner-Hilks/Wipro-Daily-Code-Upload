const express = require("express");
const morgan = require("morgan");
const logger = require("./middleware/logger");
const path = require("path");

const app = express();

// Template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom logging middleware
app.use(logger);

// Morgan logging (dev only)
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Routes
app.use("/students", require("./routes/studentRoutes"));

// Home
app.get("/", (req, res) => {
  res.send("SkillTrack Dashboard Running...");
});

// Error-handling middleware (MUST BE LAST)
app.use(require("./middleware/errorHandler"));

app.listen(3000, () => console.log("Server running on port 3000"));
