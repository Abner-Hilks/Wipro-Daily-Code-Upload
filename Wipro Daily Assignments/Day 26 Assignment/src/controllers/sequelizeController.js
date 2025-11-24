const { Instructor, Course } = require("../models");

exports.getInstructorCourses = async (req, res) => {
  const data = await Instructor.findAll({
    include: { model: Course, as: "courses" }
  });

  res.json(data);
};
