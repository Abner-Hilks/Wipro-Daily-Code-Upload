const express = require("express");
const morgan = require("morgan");

const requestLogger = require("./middleware/requestLogger");
const parseMiddleware = require("./middleware/parseMiddleware");
const userRoutes = require("./routes/users");

const app = express();
const PORT = 4000;

// View engine
app.set("view engine", "ejs");
app.set("views", "views");

// Lightweight modular middleware
app.use(requestLogger);
app.use(parseMiddleware);

// External logger for production
app.use(morgan("dev"));

// User routes
app.use("/users", userRoutes);

// Sample courses route (for template rendering)
app.get("/view-courses", (req, res) => {
  const courses = [
    { id: 1, name: "React Mastery", duration: "6 weeks" },
    { id: 2, name: "Node.js Bootcamp", duration: "8 weeks" }
  ];

  res.render("courses", { courses });
});

app.listen(PORT, () => {
  console.log(`Day 21 SkillSphere LMS running at http://localhost:${PORT}`);
});
