const express = require("express");
const router = express.Router();

const rateLimiter = require("../middleware/rateLimiter");
const { validateCourse } = require("../validator/courseValidator");
const {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
} = require("../controllers/courseController");

// Apply rate limiting to all course routes
router.use(rateLimiter);

// RESTful CRUD Routes
router.get("/", getCourses);
router.get("/:id", getCourseById);
router.post("/", validateCourse, createCourse);
router.put("/:id", validateCourse, updateCourse);
router.delete("/:id", deleteCourse);

module.exports = router;
