const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");
const isAdmin = require("../Middleware/isAdmin");

const addCourse = require("../Controllers/Course/addCourse");
const removeCourse = require("../Controllers/Course/removeCourse");
const updateTitle = require("../Controllers/Course/updateTitle");
const updateDescription = require("../Controllers/Course/updateDescription");
const updateGoals = require("../Controllers/Course/updateGoals");
const allCourses = require("../Controllers/Course/allCourses");
const sellCourse = require("../Controllers/Course/sellCourse");
const displayCourse = require("../Controllers/Course/displayCourse");
const myCourses = require("../Controllers/Course/myCourses");
const updateTarget = require("../Controllers/Course/updateTarget");

router.post("/addCourse", auth, isAdmin, addCourse.addCourse);

router.post("/removeCourse/:id", auth, isAdmin, removeCourse.removeCourse);

router.put("/updateTitle", auth, isAdmin, updateTitle.updateTitle);

router.put(
  "/updateDescription",
  auth,
  isAdmin,
  updateDescription.updateDescription
);

router.put("/updateGoals", auth, isAdmin, updateGoals.updateGoals);

router.put("/sellCourse/:id", auth, isAdmin, sellCourse.sellCourse);

router.put("/updateTarget/:id", auth.isAdmin, updateTarget.updateTrget);

router.get("/allCourses", auth, allCourses.allCourses);

router.get("/displayCourse/:id", auth, displayCourse.displayCourse);

router.get("/myCourses", auth, myCourses.myCourses);

module.exports = router;
