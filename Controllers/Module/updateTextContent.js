const { Module, updateModuleContent } = require("../../Models/Module");

exports.updateTextContent = async function(req, res, next) {
  const { error } = updateModuleContent(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const module = await Module.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { textContent: req.body.textContent } },
    { new: true }
  );
  res.send(module);
};
