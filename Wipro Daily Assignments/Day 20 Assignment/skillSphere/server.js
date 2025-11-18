const express = require("express");
const app = express();
const PORT = 4000;

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import course routes
const courseRoutes = require("./routes/courses");

// Use routes
app.use("/courses", courseRoutes);

// Home route (Challenge 1)
app.get("/", (req, res) => {
  res.send("Welcome to SkillSphere LMS API");
});

app.listen(PORT, () => {
  console.log(`SkillSphere LMS running at http://localhost:${PORT}`);
});
