const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/day26db_mongo"; 
// database auto-creates if not exist

mongoose.connect(mongoURL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection failed:", err));

module.exports = mongoose;
