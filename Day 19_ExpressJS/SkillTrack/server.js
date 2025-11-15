const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to SkillTrack API!");
});

let students = [
  { id: 1, name: "Arpit", skills: ["JS", "Node"], course: "MERN" },
  { id: 2, name: "Sarthak", skills: ["Python", "LLM"], course: "AI" }
];

// Middleware for POST validation
function validateStudent(req, res, next) {
  const { name, skills, course } = req.body;

  if (!name || !skills || !course) {
    return res.status(400).json({
      message: "name, skills, and course are required"
    });
  }

  next();
}

// User Story 1: GET /students (Fetch all students)

app.get("/students", (req, res) => {
  res.json(students);
});

// User Story 2: GET /students/:id (Fetch by ID)

app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

// User Story 3: POST /students (Add student)

app.post("/students", validateStudent, (req, res) => {
  const { name, skills, course } = req.body;

  const newStudent = {
    id: students.length + 1,
    name,
    skills,
    course
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// User Story 4: PUT /students/:id (Update student)

app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  const { name, skills, course } = req.body;

  if (name) student.name = name;
  if (skills) student.skills = skills;
  if (course) student.course = course;

  res.json(student);
});

// User Story 5: DELETE /students/:id (Delete student)

app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(index, 1);

  res.json({ message: "Student deleted successfully" });
});

// Server Start
app.listen(3000, () => {
  console.log("SkillTrack API running on http://localhost:3000");
});
