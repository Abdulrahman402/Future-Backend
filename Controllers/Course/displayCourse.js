const { Course } = require("../../Models/Course");

exports.displayCourse = async function(req, res, next) {
  const course = await Course.findOne({ _id: req.params.id })
    .populate("modules")
    .select();

  res.send(course);
};
