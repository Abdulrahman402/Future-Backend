const { User } = require("../../Models/User");

exports.allManagers = async function(req, res, next) {
  const user = await User.find({ isManager: true }).select(
    "-password -isAdmin -_id -isLearner -isTrainingManager"
  );
  res.send(user);
};
