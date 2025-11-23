exports.validateCourse = (req, res, next) => {
  const { name, duration } = req.body;

  if (!name) return res.status(400).json({ error: "Course name is required" });
  if (!duration)
    return res.status(400).json({ error: "Course duration is required" });

  next();
};
