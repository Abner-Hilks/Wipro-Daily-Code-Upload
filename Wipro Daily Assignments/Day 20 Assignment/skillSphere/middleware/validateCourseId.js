module.exports = (req, res, next) => {
  const { id } = req.params;

  // Check if numeric
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid course ID" });
  }

  next();
};
