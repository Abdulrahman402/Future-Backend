const { User } = require("../../Models/User");

exports.userProfile = async function(req, res, next) {
  const user = await User.findOne({ _id: req.params.id }).select(
    "-_id -password"
  );
  res.send(user);
};
