// student.js will be uased for following CRUD operations for student entity ( In momeory storage  , using arrray of objects    )
// 1. Create a new student - POST /students
// 2. Get all students - GET /students
// 3. Get a student by ID - GET /students/:id
// 4. Update a student by ID - PUT /students/:id
// 5. Delete a student by ID - DELETE /students/:id

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/students.json');

// Helper: Read file
function readStudents() {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

// Helper: Write file
function writeStudents(students) {
  fs.writeFileSync(filePath, JSON.stringify(students, null, 2), 'utf8');
}

// POST /students
router.post('/', (req, res) => {
  let students = readStudents();

  const newStudent = {
    id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
    ...req.body
  };

  students.push(newStudent);
  writeStudents(students);

  res.status(201).json(newStudent);
});

// GET /students
router.get('/', (req, res) => {
  let students = readStudents();
  res.json(students);
});

// GET /students/:id
router.get('/:id', (req, res) => {
  let students = readStudents();
  const id = parseInt(req.params.id);

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  res.json(student);
});

// PUT /students/:id
router.put('/:id', (req, res) => {
  let students = readStudents();
  const id = parseInt(req.params.id);

  const index = students.findIndex(s => s.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  students[index] = { ...students[index], ...req.body };
  writeStudents(students);

  res.json(students[index]);
});

// DELETE /students/:id
router.delete('/:id', (req, res) => {
  let students = readStudents();
  const id = parseInt(req.params.id);

  const index = students.findIndex(s => s.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  students.splice(index, 1);
  writeStudents(students);

  res.json({ message: 'Student deleted successfully' });
});

module.exports = router;

// // BELOW IS THE IN-MEMORY STORAGE VERSION OF THE SAME ROUTE HANDLERS
// const express = require('express');
// const router = express.Router();

// let students = [];          // In-memory storage
// let currentId = 1;          // Auto-increment ID

//
// // POST /students
//
// router.post('/', (req, res) => {
//   const student = { id: currentId++, ...req.body };
//   students.push(student);
//   res.status(201).json(student);
// });

//
// // GET /students
//
// router.get('/', (req, res) => {
//   res.json(students);
// });

//
// // GET /students/:id
//
// router.get('/:id', (req, res) => {
//   const student = students.find(s => s.id === parseInt(req.params.id));

//   if (!student) {
//     return res.status(404).json({ message: 'Student not found' });
//   }

//   res.json(student);
// });

//
// // PUT /students/:id
// 
// router.put('/:id', (req, res) => {
//   const student = students.find(s => s.id === parseInt(req.params.id));

//   if (!student) {
//     return res.status(404).json({ message: 'Student not found' });
//   }

//   Object.assign(student, req.body);
//   res.json(student);
// });

//
// // DELETE /students/:id
//
// router.delete('/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = students.findIndex(s => s.id === id);

//   if (index === -1) {
//     return res.status(404).json({ message: 'Student not found' });
//   }

//   students.splice(index, 1);

//   res.json({ message: "Student deleted successfully" });
// });

// // EXPORT ROUTER (required!)
// module.exports = router;
