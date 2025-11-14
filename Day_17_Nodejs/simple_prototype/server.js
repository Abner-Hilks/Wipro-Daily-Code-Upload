const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  // Home Route
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Node.js Server!");
  }

  // About Route
  else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the About Page of our Node.js prototype.");
  }

  // Contact Route
  else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contact us at: arpit@nodejs.com");
  }

  // 404 Route
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
