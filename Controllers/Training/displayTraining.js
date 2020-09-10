const { Training } = require("../../Models/Training");

exports.displayTraining = async function(req, res, next) {
  const courses = await Training.find({ _id: req.params.id }).populate(
    "manager trainingManager learner courses"
  );

  res.send(courses);
};
