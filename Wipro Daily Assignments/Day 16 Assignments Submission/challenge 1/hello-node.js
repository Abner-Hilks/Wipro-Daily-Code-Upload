console.log("Node.js Version:", process.version);
console.log("Current File:", __filename);
console.log("Current Directory:", __dirname);

const intervalId = setInterval(() => {
  console.log("Welcome to Node.js! This message prints every 3 seconds.");
}, 3000);

// Bonus: Stop interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Stopped after 10 seconds.");
}, 10000);
