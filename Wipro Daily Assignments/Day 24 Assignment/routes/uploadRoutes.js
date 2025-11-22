// routes/uploadRoutes.js
const express = require("express");
const router = express.Router();
const { uploadPdf } = require("../middlewares/upload");

// POST /api/v1/upload
router.post("/upload", uploadPdf.single("file"), (req, res, next) => {
  // multer stores file info on req.file
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.json({ message: `File uploaded successfully: ${req.file.originalname}`, filename: req.file.filename });
});

module.exports = router;
