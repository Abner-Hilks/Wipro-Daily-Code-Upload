const mongoose = require("../config/mongo");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model("User", UserSchema);
