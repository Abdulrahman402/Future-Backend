const { User, assignLearner } = require("../../Models/User");

exports.assignLearner = async function(req, res, next) {
  const { error } = assignLearner(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const manager = await User.findOne({ email: req.body.email });
  if (!manager) return res.status(404).send("User is not registered");

  await User.findOneAndUpdate(
    { email: req.body.email },
    { $set: { isLearner: true } },
    { new: true }
  );
  res.send("Role Learner added");
};
