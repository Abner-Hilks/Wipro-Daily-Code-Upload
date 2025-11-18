exports.getCourseDetails = (req, res) => {
  const id = req.params.id;

  const courseData = {
    id: id,
    name: "React Mastery",
    duration: "6 weeks",
  };

  res.json(courseData);
};
