const moment = require("moment");

const name = process.argv[2];

if (!name) {
  console.log("Please provide a name: node greet.js John");
  process.exit(1);
}

const now = moment().format("ddd MMM DD YYYY, hh:mm A");

console.log(`Hello, ${name}! Today is ${now}`);
