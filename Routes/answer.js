const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");
const isLearner = require("../Middleware/isLearner");

const addAnswer = require("../Controllers/Answer/addAnswer");
const removeAnswer = require("../Controllers/Answer/removeAnswer");

router.post("/addAnswer/:quizId", auth, isLearner, addAnswer.addAnswer);

router.put(
  "/removeAnswer/:answerId/:quizId",
  auth,
  isLearner,
  removeAnswer.removeAnswer
);

module.exports = router;
