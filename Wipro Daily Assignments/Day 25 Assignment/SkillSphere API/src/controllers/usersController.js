exports.getUsers = (req, res) => {
  res.json([
    { id: 1, name: "Arpit" },
    { id: 2, name: "Instructor" }
  ]);
};

exports.addUser = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name required" });

  res.status(201).json({ id: 3, name });
};
