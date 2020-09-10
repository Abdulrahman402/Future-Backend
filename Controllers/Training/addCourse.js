const { User } = require("../../Models/User");

exports.addCourse = async function(req, res, next) {
  await User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { training: req.params.id } },
    { new: true }
  );

  const training = await User.findOne({ _id: req.user._id })
    .populate("training", "-_id")
    .select("training");

  res.send(training);
};
