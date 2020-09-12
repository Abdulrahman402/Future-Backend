const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");
const isAdmin = require("../Middleware/isAdmin");

const addModule = require("../Controllers/Module/addModule");
const updateTitle = require("../Controllers/Module/updateTitle");
const updateDescription = require("../Controllers/Module/updateDescription");
const updateTextContent = require("../Controllers/Module/updateTextContent");
const displayModule = require("../Controllers/Module/displayModule");
const removeModule = require("../Controllers/Module/removeModule");

router.post("/addModule/:id", auth, isAdmin, addModule.addModule);

router.put("/updateTitle/:id", auth, isAdmin, updateTitle.updateTitle);

router.put("/removeModule/:moduleId", auth, isAdmin, removeModule.removeModule);

router.put(
  "/updateDescription/:id",
  auth,
  isAdmin,
  updateDescription.updateDescription
);

router.put(
  "/updateTextContent/:id",
  auth,
  isAdmin,
  updateTextContent.updateTextContent
);

router.get("/displayModule/:id", auth, displayModule.displayModule);

router.put("/removeModule/:moduleId", auth, isAdmin, removeModule.removeModule);

module.exports = router;
