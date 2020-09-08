const { User } = require("../../Models/User");

exports.allTrainingManagers = async function(req, res, next) {
  const user = await User.find({ isTrainingManager: true }).select(
    "-password -isAdmin -_id -isLearner -isManager"
  );
  res.send(user);
};
