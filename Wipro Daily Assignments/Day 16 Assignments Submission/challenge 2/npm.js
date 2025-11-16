import chalk from "chalk";
import figlet from "figlet";

figlet("Welcome to Node.js", (err, data) => {
  if (err) {
    console.log("Error:", err);
    return;
  }

  console.log(chalk.green(data));
});
