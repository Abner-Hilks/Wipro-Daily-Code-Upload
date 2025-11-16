const fs = require("fs").promises;

async function handleFeedback() {
  const feedback = "Node.js is awesome!";

  try {
    // Write file
    await fs.writeFile("feedback.txt", feedback);
    console.log("Data written successfully.");

    // Read file
    console.log("Reading file...");
    const data = await fs.readFile("feedback.txt", "utf-8");
    console.log(data);

  } catch (err) {
    console.error("Error:", err);
  }
}

handleFeedback();
