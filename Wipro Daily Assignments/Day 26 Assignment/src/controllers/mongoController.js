const Enrollment = require("../models/Enrollment");
const User = require("../models/User");


// GET all enrollments

exports.getEnrollments = async (req, res) => {
  try {
    const data = await Enrollment.find().populate("userId"); 
    res.json({ enrollments: data });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch enrollments" });
  }
};


// POST: Create Enrollment
exports.createEnrollment = async (req, res) => {
  try {
    const { userId, courseName, date } = req.body;

    if (!userId || !courseName) {
      return res.status(400).json({ error: "userId and courseName are required" });
    }

    // OPTIONAL check: ensure user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const enrollment = new Enrollment({
      userId,
      courseName,
      date: date ? new Date(date) : new Date(),
    });

    await enrollment.save();

    res.status(201).json({
      message: "Enrollment created successfully",
      enrollment,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create enrollment" });
  }
};
