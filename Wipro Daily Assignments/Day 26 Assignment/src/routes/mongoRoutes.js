const express = require("express");
const { getEnrollments, createEnrollment } = require("../controllers/mongoController");

const router = express.Router();

router.get("/mongo/enrollments", getEnrollments);
router.post("/mongo/enrollments", createEnrollment);

module.exports = router;
