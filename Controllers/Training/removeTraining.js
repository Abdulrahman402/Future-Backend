const { Training } = require("../../Models/Training");

exports.removeTraining = async function(req, res, next) {
  await Training.findOneAndRemove({ _id: req.params.trainingId });

  res.send("Training removed");
};
