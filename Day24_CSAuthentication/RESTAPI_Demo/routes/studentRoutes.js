// In routes.js we will defines all the routes for our application ie URLs
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Correct routes
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.createStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;


// this file exlusively handles routing and delegates the actual logic to the controller functions defined in studentController.js