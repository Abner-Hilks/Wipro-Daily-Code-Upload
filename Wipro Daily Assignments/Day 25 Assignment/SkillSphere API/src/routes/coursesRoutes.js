const express = require("express");
const router = express.Router();
const {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse
} = require("../controllers/coursesController");

const { validateCourse } = require("../middlewares/validator");

router.get("/", getCourses);
router.post("/", validateCourse, addCourse);
router.put("/:id", validateCourse, updateCourse);
router.delete("/:id", deleteCourse);

module.exports = router;
