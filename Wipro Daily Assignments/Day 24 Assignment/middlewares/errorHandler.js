// middlewares/errorHandler.js
module.exports = (err, req, res, next) => {
  // multer errors
  if (err && err.name === "MulterError") {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ error: "File size is too large" });
    }
    if (err.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({ error: "Only PDF files are allowed" });
    }
    return res.status(400).json({ error: err.message || "Upload error" });
  }

  // generic errors
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || "Internal Server Error" });
};
