const { User } = require("../../Models/User");

exports.allUsers = async function(req, res, next) {
  const user = await User.find({ isLearner: true }).select(
    "-password -isAdmin -_id -isManager -isTrainingManager"
  );
  res.send(user);
};
