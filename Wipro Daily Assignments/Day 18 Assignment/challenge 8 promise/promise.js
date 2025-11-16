const fs = require("fs").promises;

fs.readFile("input.txt", "utf-8")
  .then(data => fs.writeFile("output.txt", data))
  .then(() => console.log("File copied successfully!"))
  .catch(err => console.error("Error:", err));
