let courses = [
  { id: 1, name: "Node.js Basics", duration: "3 months" },
  { id: 2, name: "Node.js Advanced", duration: "4 months" }
];

// GET all courses
exports.getCourses = (req, res) => {
  res.json(courses);
};

// GET one course
exports.getCourseById = (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));

  if (!course) {
    return res.status(404).json({ error: "Course not found" });
  }

  res.json(course);
};

// POST create course
exports.createCourse = (req, res) => {
  const { name, duration } = req.body;

  const newCourse = {
    id: courses.length + 1,
    name,
    duration
  };

  courses.push(newCourse);
  res.status(201).json(newCourse);
};

// PUT update course
exports.updateCourse = (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));

  if (!course) {
    return res.status(404).json({ error: "Course not found" });
  }

  const { name, duration } = req.body;

  course.name = name;
  course.duration = duration;

  res.json(course);
};

// DELETE a course
exports.deleteCourse = (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));

  if (!course) {
    return res.status(404).json({ error: "Course not found" });
  }

  courses = courses.filter(c => c.id !== course.id);

  res.json({ message: "Course deleted successfully" });
};
