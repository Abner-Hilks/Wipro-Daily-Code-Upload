const pool = require("../config/mysql");

exports.addCourse = async (req, res) => {
  const { name, duration } = req.body;
  try {
    const [result] = await pool.execute(
      "INSERT INTO courses (name, duration) VALUES (?, ?)",
      [name, duration]
    );

    console.log("INSERT INTO courses successful:", result.insertId);
    res.json({ message: "Course inserted", id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "MySQL Error" });
  }
};
