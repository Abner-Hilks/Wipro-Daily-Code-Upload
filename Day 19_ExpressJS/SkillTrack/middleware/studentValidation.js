module.exports = function validateStudent(req, res, next) {
  const { name, skills, course } = req.body;

  if (!name || !skills || !course) {
    return res.status(400).json({
      message: "name, skills, and course are required"
    });
  }

  next();
};
