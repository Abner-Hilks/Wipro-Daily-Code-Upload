const fs = require("fs").promises;

async function copyFileAsync() {
  try {
    const data = await fs.readFile("input.txt", "utf-8");

    // Bonus: Additional 1-second delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    await fs.writeFile("output.txt", data);

    console.log("File copied successfully (async/await)!");
  } catch (err) {
    console.error("Error:", err);
  }
}

copyFileAsync();
