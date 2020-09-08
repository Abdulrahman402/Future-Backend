const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");
const isAdmin = require("../Middleware/isAdmin");

const signUp = require("../Controllers/User/signUp");
const myProfile = require("../Controllers/User/myProfile");
const changeName = require("../Controllers/User/changeName");
const changePassword = require("../Controllers/User/changePassword");
const allUsers = require("../Controllers/User/allUsers");
const allAdmins = require("../Controllers/User/allAdmins");
const assignManager = require("../Controllers/User/assignManager");
const assignTrainingManager = require("../Controllers/User/assignTrainingManager");
const assignLearner = require("../Controllers/User/assignLearner");
const allManagers = require("../Controllers/User/allManagers");
const allTrainingManagers = require("../Controllers/User/allTrainingManagers");
const findUser = require("../Controllers/User/findUser");
const userProfile = require("../Controllers/User/userProfile");

router.post("/signUp", auth, isAdmin, signUp.signUp);

router.get("/allusers", auth, isAdmin, allUsers.allUsers);

router.get("/userProfile/:id", auth, isAdmin, userProfile.userProfile);

router.get("/allAdmins", auth, isAdmin, allAdmins.allAdmins);

router.get("/allManagers", auth, isAdmin, allManagers.allManagers);

router.get(
  "/allTrainingManagers",
  auth,
  isAdmin,
  allTrainingManagers.allTrainingManagers
);

router.get("/me", auth, myProfile.myProfile);

router.get("/findUser", auth, isAdmin, findUser.findUser);

router.put("/changeName", auth, changeName.changeName);

router.put("/changePassword", auth, changePassword.changePassword);

router.put("/assignManager", auth, isAdmin, assignManager.assignManager);

router.put(
  "/assignTrainingManager",
  auth,
  isAdmin,
  assignTrainingManager.assignTrainingManager
);

router.put("/assignLearner", auth, isAdmin, assignLearner.assignLearner);

module.exports = router;
