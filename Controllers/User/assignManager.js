const { User, assignManager } = require("../../Models/User");

exports.assignManager = async function(req, res, next) {
  const { error } = assignManager(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let manager = await User.findOne({ email: req.body.email });
  if (!manager) return res.status(404).send("User is not registered");

  await User.findOneAndUpdate(
    { email: req.body.email },
    { $set: { company: req.body.company, isManager: true } },
    { new: true }
  );

  res.send("Role manager added");
};
