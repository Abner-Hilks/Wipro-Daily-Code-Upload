let courses = [
  { id: 1, name: "Node.js Basics", duration: "3 months" },
  { id: 2, name: "Node.js Advanced", duration: "4 months" }
];

exports.getCourses = (req, res) => {
  res.json(courses);
};

exports.addCourse = (req, res) => {
  const { name, duration } = req.body;
  const newCourse = { id: courses.length + 1, name, duration };
  courses.push(newCourse);
  res.status(201).json(newCourse);
};

exports.updateCourse = (req, res) => {
  const id = +req.params.id;
  const { name, duration } = req.body;

  const index = courses.findIndex(c => c.id === id);
  if (index === -1) return res.status(404).json({ error: "Course not found" });

  courses[index] = { id, name, duration };
  res.json(courses[index]);
};

exports.deleteCourse = (req, res) => {
  const id = +req.params.id;
  courses = courses.filter(c => c.id !== id);
  res.json({ message: "Course deleted successfully" });
};
