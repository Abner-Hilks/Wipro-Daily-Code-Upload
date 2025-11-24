const express = require('express');
const router = express.Router();
const Student = require('./models/sstudent');

// Get/Read Students 
router.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).send("Error fetching students");
    }
});
-
// Get/Read Student by id
router.get('/students/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).send("Student not found");

        res.json(student);
    } catch (err) {
        res.status(500).send("Error fetching student");
    }
});


// Add/Create Student

router.post('/students', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();

        res.status(201).json({
            message: "Student added successfully",
            id: student._id
        });
    } catch (err) {
        res.status(500).send("Error adding student");
    }
});


// Update Student

router.put('/students/:id', async (req, res) => {
    try {
        const updated = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) return res.status(404).send("Student not found");

        res.send("Student updated successfully");
    } catch (err) {
        res.status(500).send("Error updating student");
    }
});


// Delete Student

router.delete('/students/:id', async (req, res) => {
    try {
        const deleted = await Student.findByIdAndDelete(req.params.id);

        if (!deleted) return res.status(404).send("Student not found");

        res.send("Student deleted successfully");
    } catch (err) {
        res.status(500).send("Error deleting student");
    }
});

module.exports = router;
