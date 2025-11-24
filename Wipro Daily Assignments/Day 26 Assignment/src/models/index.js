const Instructor = require("./Instructor");
const Course = require("./Course");

// One Instructor → Many Courses
Instructor.hasMany(Course, {
  foreignKey: "instructorId",
  as: "courses",
});

Course.belongsTo(Instructor, {
  foreignKey: "instructorId",
  as: "instructor",
});

module.exports = { Instructor, Course };
