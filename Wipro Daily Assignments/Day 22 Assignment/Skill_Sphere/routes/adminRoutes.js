const express = require("express");
const router = express.Router();

const isAdmin = require("../middleware/isAdmin");
const { adminDashboard } = require("../controllers/adminController");

router.get("/admin", isAdmin, adminDashboard);

module.exports = router;
