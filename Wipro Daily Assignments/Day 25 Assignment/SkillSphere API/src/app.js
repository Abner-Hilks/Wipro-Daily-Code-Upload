// app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const coursesRoutes = require("./routes/coursesRoutes");
const usersRoutes = require("./routes/usersRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Middlewares
app.use(helmet());          // Security best practice
app.use(cors());            // Allow frontend
app.use(compression());     // gzip compression for performance
app.use(express.json());    // Parse JSON

// API Routes
app.use("/api/courses", coursesRoutes);
app.use("/api/users", usersRoutes);

// Health check (required for Render/Heroku)
app.get("/status", (req, res) => {
  res.json({ message: "App is live" });
});

// Global error handler
app.use(errorHandler);

module.exports = app;
