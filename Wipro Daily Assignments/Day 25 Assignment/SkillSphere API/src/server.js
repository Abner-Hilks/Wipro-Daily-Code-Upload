// server.js
require("dotenv").config();
const app = require("./app");
const http = require("http");

const PORT = process.env.PORT || 3000;

// Create HTTP server (good for future WebSockets or scaling)
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
