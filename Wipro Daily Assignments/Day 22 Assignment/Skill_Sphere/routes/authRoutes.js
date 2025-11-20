const express = require("express");
const router = express.Router();
const passport = require("passport");

const path = require("path");
const { registerUser, loginUser } = require("../controllers/authController");

// Show Register Page (Browser)
router.get("/register", (req, res) => {
  res.render("register");
});

// Show Login Page (Browser)
router.get("/login", (req, res) => {
  res.render("login");
});

// Register user (POST)
router.post("/register", registerUser);

// Login user (POST)
router.post("/login", passport.authenticate("local"), loginUser);

module.exports = router;
