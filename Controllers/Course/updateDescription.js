const { Course, updateCourseDescription } = require("../../Models/Course");

exports.updateDescription = async function(req, res, next) {
  const { error } = updateCourseDescription(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = await Course.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { description: req.body.description } },
    { new: true }
  );
  res.send(course);
};
