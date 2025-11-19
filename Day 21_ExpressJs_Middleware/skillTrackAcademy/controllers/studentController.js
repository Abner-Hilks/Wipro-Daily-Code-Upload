const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/students.json");

function readData() {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

exports.getAllStudents = (req, res) => {
  const students = readData();
  res.render("students", { students });
};

exports.addStudent = (req, res) => {
  const students = readData();

  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    email: req.body.email
  };

  students.push(newStudent);
  writeData(students);

  // Detect JSON request (Thunder/Postman)
  const isApiRequest =
    req.headers["content-type"] &&
    req.headers["content-type"].includes("application/json");

  if (isApiRequest) {
    return res.status(201).json({
      message: "Student added",
      student: newStudent
    });
  }

  // Browser form → redirect
  res.redirect("/students");
};

