exports.createUser = (req, res) => {
  res.json({
    message: "User created successfully",
    data: req.body
  });
};
