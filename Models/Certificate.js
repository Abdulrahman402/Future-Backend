const mongoose = require("mongoose");
const joi = require("joi");

const Schema = mongoose.Schema;

const certificateSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  track: {
    type: String,
    required: true
  },
  duration: {
    type: Date,
    required: true
  }
});

const Certificate = mongoose.model("Cretificate", certificateSchema);

function validateCretificate(certificate) {
  const schema = {
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    track: joi.string().required(),
    duration: joi.date().required()
  };
  return joi.validate(certificate, schema);
}

function updateCretificateName(certificate) {
  const schema = {
    firstName: joi.string().required(),
    lastName: joi.string().required()
  };
  return joi.validate(certificate, schema);
}

function updateCretificateTrack(certificate) {
  const schema = {
    track: joi.string().required()
  };
  return joi.validate(certificate, schema);
}

function updateCretificateDuration(certificate) {
  const schema = {
    duration: joi.date().required()
  };
  return joi.validate(certificate, schema);
}

module.exports = {
  Certificate,
  validateCretificate,
  updateCretificateName,
  updateCretificateTrack,
  updateCretificateDuration
};
