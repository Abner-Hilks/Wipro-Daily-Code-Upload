const express = require("express");
const router = express.Router();

const { getCourseDetails } = require("../controllers/coursesController");
const validateCourseId = require("../middleware/validateCourseId");

// /courses/:id (with validation middleware)
router.get("/:id", validateCourseId, getCourseDetails);

module.exports = router;
