const { Training } = require("../../Models/Training");

exports.removeCourse = async function(req, res, next) {
  await Training.findOneAndUpdate(
    { _id: req.params.trainingId },
    { $pull: { courses: req.params.courseId } },
    { new: true }
  );

  const training = await Training.findOne({ _id: req.params.trainingId })
    .populate("courses")
    .select();

  res.send(training);
};
