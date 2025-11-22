// middlewares/upload.js
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20 MB (adjust as needed)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "uploads"));
  },
  filename: (req, file, cb) => {
    // sanitize by generating a UUID filename and preserving extension
    const ext = path.extname(file.originalname).toLowerCase();
    const safeName = `${uuidv4()}${ext}`;
    cb(null, safeName);
  }
});

// only accept PDF MIME type and extension
function fileFilter(req, file, cb) {
  const allowedMime = ["application/pdf"];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedMime.includes(file.mimetype) && ext === ".pdf") {
    cb(null, true);
  } else {
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE", "Only PDF files are allowed"));
  }
}

const uploadPdf = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE
  }
});

module.exports = { uploadPdf };
