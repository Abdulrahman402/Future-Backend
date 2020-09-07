const mongoose = require("mongoose");
const joi = require("joi");
const jwt = require("jsonwebtoken");

const keys = require("../Config/keys");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  company: String,
  role: String,
  points: Number,
  picture: String,
  courses: {
    type: [Schema.Types.ObjectId],
    ref: "Course"
  },
  training: {
    type: [Schema.Types.ObjectId],
    ref: "Training"
  }
});

userSchema.methods.generateAuthToken = async function() {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin, role: this.role },
    keys.tokenSecretKey
  );

  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi
      .string()
      .required()
      .email(),
    password: joi.string().required()
  };
  return joi.validate(user, schema);
}

function updateUserName(user) {
  const schema = {
    newFirstName: joi.string().required(),
    newLastName: joi.string().required()
  };
  return joi.validate(user, schema);
}

function updateUserPassword(user) {
  const schema = {
    oldPW: joi.string().required(),
    newPW: joi.string().required()
  };
  return joi.validate(user, schema);
}

function assignManager(manager) {
  const schema = {
    company: joi.string().required(),
    role: joi.string().required()
  };
  return joi.validate(manager, schema);
}

module.exports = {
  User,
  validateUser,
  updateUserName,
  updateUserPassword,
  assignManager
};
