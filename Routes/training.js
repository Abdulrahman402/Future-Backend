const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");
const isManager = require("../Middleware/isManager");

const addTraining = require("../Controllers/Training/addTraining");
const addCourse = require("../Controllers/Training/addCourse");
const displayTraining = require("../Controllers/Training/displayTraining");
const assignLearner = require("../Controllers/Training/assignLearner");
const assignTrainingManager = require("../Controllers/Training/assignTrainingManager");
const removeCourse = require("../Controllers/Training/removeCourse");
const updateTitle = require("../Controllers/Training/updateTitle");
const updateDescription = require("../Controllers/Training/updateDescription");
const updateSpeciality = require("../Controllers/Training/updateSpeciality");
const updateDate = require("../Controllers/Training/updateDate");

router.post("/addTraining", auth, isManager, addTraining.addTraining);

router.put("/addCourse/:id", auth, isManager, addCourse.addCourse);

router.put(
  "/removeCourse/:trainingId/:courseId",
  auth,
  isManager,
  removeCourse.removeCourse
);

router.put(
  "/assignLearner/:trainingId/:userId",
  auth,
  isManager,
  assignLearner.assignLearner
);

router.put(
  "/assignTrainingManager/:trainingId/:userId",
  auth,
  isManager,
  assignTrainingManager.assignTrainingManager
);

router.put("/updateTitle/:id", auth, isManager, updateTitle.updateTitle);

router.put(
  "/updateDescription/:id",
  auth,
  isManager,
  updateDescription.updateDescription
);

router.put(
  "/updateSpeciality/:id",
  auth,
  isManager,
  updateSpeciality.updateSpeciality
);

router.put("/updateDate/:id", auth, isManager, updateDate.updateDate);

router.get(
  "/displayTraining",
  auth,
  isManager,
  displayTraining.displayTraining
);

module.exports = router;
