const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");
const isAdmin = require("../Middleware/isAdmin");
const isManager = require("../Middleware/isManager");
const isTrainingManager = require("../Middleware/isTrainingManager");

const signUp = require("../Controllers/User/signUp");
const myProfile = require("../Controllers/User/myProfile");
const changeName = require("../Controllers/User/changeName");
const changePassword = require("../Controllers/User/changePassword");
const allUsers = require("../Controllers/User/allUsers");
const allAdmins = require("../Controllers/User/allAdmins");
const assignManager = require("../Controllers/User/assignManager");

router.post("/signUp", auth, isAdmin, signUp.signUp);

router.get("/allusers", auth, isAdmin, allUsers.allUsers);

router.get("/allAdmins", auth, isAdmin, allAdmins.allAdmins);

router.get("/me", auth, myProfile.myProfile);

router.put("/changeName", auth, changeName.changeName);

router.put("/changePassword", auth, changePassword.changePassword);

router.put("/assignManager", auth, isAdmin, assignManager.assignManager);

module.exports = router;
