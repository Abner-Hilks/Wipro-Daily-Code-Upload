const fs = require("fs");

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log("File Content:", data);

  // BONUS: Artificial delay before confirmation
  setTimeout(() => {
    console.log("Read operation completed");
  }, 1000);
});
