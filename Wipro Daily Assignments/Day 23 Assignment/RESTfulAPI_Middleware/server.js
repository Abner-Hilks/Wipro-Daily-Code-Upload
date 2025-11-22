const express = require("express");
const bodyParser = require("body-parser");

const courseRoutes = require("./routes/courseRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(bodyParser.json());

// API Versioning
app.use("/api/courses", courseRoutes);

// Centralized Error Handler
app.use(errorHandler);

app.listen(3000, () => console.log("Server running on port 3000"));
