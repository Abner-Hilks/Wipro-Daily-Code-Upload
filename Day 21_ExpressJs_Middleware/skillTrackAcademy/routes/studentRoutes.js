const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");
const validateStudent = require("../middleware/validateStudent");

router.get("/", studentController.getAllStudents);
router.post("/", validateStudent, studentController.addStudent);

module.exports = router;
