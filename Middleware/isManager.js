module.exports = (req, res, next) => {
  if (!req.user.isManager) return res.status(401).send("Authorization failed");
  next();
};
