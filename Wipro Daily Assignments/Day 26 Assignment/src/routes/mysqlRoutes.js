const express = require("express");
const { addCourse } = require("../controllers/mysqlController");

const router = express.Router();

router.post("/mysql/course", addCourse);

module.exports = router;
