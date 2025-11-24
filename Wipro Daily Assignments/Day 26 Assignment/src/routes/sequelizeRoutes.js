const express = require("express");
const { getInstructorCourses } = require("../controllers/sequelizeController");

const router = express.Router();

router.get("/sequelize/instructors", getInstructorCourses);

module.exports = router;
