module.exports = (err, req, res, next) => {
  console.error("ERROR:", err.message);

  res.status(500).json({
    status: "error",
    message: "Internal Server Error. Please try again later."
  });
};
