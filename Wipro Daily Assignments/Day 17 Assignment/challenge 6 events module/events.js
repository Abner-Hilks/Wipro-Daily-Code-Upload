const EventEmitter = require("events");

const emitter = new EventEmitter();

// Register listeners
emitter.on("userLoggedIn", (user) => {
  console.log(`User ${user} logged in.`);
});

emitter.on("userLoggedOut", (user) => {
  console.log(`User ${user} logged out.`);
});

emitter.on("sessionExpired", (user) => {
  console.log(`Session for ${user} expired after 5 seconds.`);
});

// Emit events
emitter.emit("userLoggedIn", "John");

// Auto-trigger session expired
setTimeout(() => {
  emitter.emit("sessionExpired", "John");
  emitter.emit("userLoggedOut", "John");
}, 5000);
