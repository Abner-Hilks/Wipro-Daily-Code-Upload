const User = require("../model/user");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    role: role || "user"
  });

  await newUser.save();

  console.log("User saved:", newUser);

  res.send(`Registration successful for ${name}`);
};

// Redirect both normal users AND admin users to /admin after login
exports.loginUser = (req, res) => {
  return res.redirect("/admin");
};
