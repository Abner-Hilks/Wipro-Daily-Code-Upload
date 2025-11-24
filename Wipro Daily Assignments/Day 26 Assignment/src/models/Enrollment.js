const mongoose = require("../config/mongo");

const EnrollmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  courseName: String,
  date: Date,
});

module.exports = mongoose.model("Enrollment", EnrollmentSchema);
