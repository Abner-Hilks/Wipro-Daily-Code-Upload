// server.js
const fs = require("fs");
const path = require("path");
const http = require("http");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { Server } = require("socket.io");

const uploadRoutes = require("./routes/uploadRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

// create uploads dir if missing
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

// Middleware
app.use(helmet()); // basic security headers
app.use(express.json());
app.use(cors());

// API versioning: base for uploads
app.use("/api/v1", uploadRoutes);

// Serve uploaded files as static resources under /materials
// Visiting /materials/module1.pdf will download the file (if exists)
app.use("/materials", express.static(uploadsDir, {
  dotfiles: "deny",
  extensions: ["pdf"],
  index: false,
  setHeaders: (res, filePath) => {
    // Force download for PDFs
    res.setHeader("Content-Disposition", `attachment; filename="${path.basename(filePath)}"`);
  }
}));

// serve a test chat client (for development/demo)
app.use("/", express.static(path.join(__dirname, "public")));

app.use(errorHandler); // centralized error handler (last middleware)

// HTTP server + Socket.IO
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*", // tighten in production
    methods: ["GET", "POST"]
  },
  // For production, you'd configure `allowEIO3`, transports, etc. carefully.
});

// Use a namespace for live sessions (scalable and follows best practice)
const live = io.of("/live");

live.on("connection", (socket) => {
  console.log("[/live] socket connected:", socket.id);

  // join a room (e.g., by courseId) — client should emit 'join' with { room }
  socket.on("join", ({ room, user }) => {
    if (!room) return;
    socket.join(room);
    socket.to(room).emit("system", { message: `${user || "A user"} joined`, ts: Date.now() });
    console.log(`${socket.id} joined room ${room}`);
  });

  socket.on("leave", ({ room, user }) => {
    socket.leave(room);
    socket.to(room).emit("system", { message: `${user || "A user"} left`, ts: Date.now() });
  });

  // broadcast message to the room
  socket.on("message", ({ room, user, message }) => {
    if (!room || !message) return;
    const payload = { user, message, ts: Date.now() };
    // emit to all clients in room, including sender
    live.to(room).emit("message", payload);
  });

  socket.on("disconnect", (reason) => {
    console.log("[/live] disconnect:", socket.id, reason);
  });
});

// Start server
httpServer.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  console.log(`Upload endpoint: POST http://localhost:${PORT}/api/v1/upload`);
  console.log(`Materials served at: http://localhost:${PORT}/materials/<filename.pdf>`);
  console.log(`Chat client: http://localhost:${PORT}/chat.html`);
});
