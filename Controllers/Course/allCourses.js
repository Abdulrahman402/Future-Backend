const { Course } = require("../../Models/Course");

exports.allCourses = async function(req, res, next) {
  const page = req.query.page;
  const perPage = 20;
  const query = req.query.search;

  if (!page && !query) {
    const allCourses = await Course.find();
    res.send(allCourses);
  }

  const count = await Course.find({
    title: { $regex: query, $options: "i" }
  }).count();

  // search for a course
  const course = await Course.find({
    title: { $regex: query, $options: "i" }
  })

    // pagination
    .limit(perPage)
    .skip((page - 1) * perPage);

  res.send({ course, count });
};
