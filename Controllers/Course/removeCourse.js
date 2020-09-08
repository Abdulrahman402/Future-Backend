const { Course } = require("../../Models/Course");

exports.removeCourse = async function(req, res, next) {
  await Course.findOneAndRemove({ _id: req.params.id });
  res.send("Course removed");
};
