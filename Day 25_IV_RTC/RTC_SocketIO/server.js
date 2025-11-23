// server.js
// Real-time communication using Express + Socket.IO

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

// Create HTTP server
const server = http.createServer(app);

// Attach socket.io to HTTP server
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Middleware
app.use(express.json());
app.use(express.static("public"));  // serves index.html automatically

// Basic route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Socket.io connection
io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Listen for messages
    socket.on("message", (data) => {
        io.emit("message", data); // broadcast to all clients
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
