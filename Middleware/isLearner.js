module.exports = (req, res, next) => {
  if (!req.user.isLearner) return res.status(401).send("Authorization failed");
  next();
};
