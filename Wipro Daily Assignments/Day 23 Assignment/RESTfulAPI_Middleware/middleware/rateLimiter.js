const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5,                  // limits each IP to 5 requests per minute
  message: { error: "Too many requests" }
});

module.exports = rateLimiter;
