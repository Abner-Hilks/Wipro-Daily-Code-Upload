module.exports = function (req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send("Access Denied");
  if (req.user.role !== "admin") return res.status(403).send("Access Denied");
  next();
};
