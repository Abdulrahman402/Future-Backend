const mongoose = require("mongoose");
const joi = require("joi");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  goals: {
    type: String,
    required: true
  },
  background: {
    type: String,
    required: true
  },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String
      }
    }
  ],
  ratings: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      rate: {
        type: Number,
        min: 1,
        max: 5
      }
    }
  ],
  modules: {
    type: [Schema.Types.ObjectId],
    ref: "Module"
  },
  quiz: {
    type: [Schema.Types.ObjectId],
    ref: "Quiz"
  }
});

const Course = mongoose.model("Course", courseSchema);

function validateCourse(course) {
  const schema = {
    title: joi.string().required(),
    description: joi.string().required(),
    goals: joi.string().required()
  };
  return joi.validate(course, schema);
}

function updateCourseTitle(course) {
  const schema = {
    title: joi.string().required()
  };
  return joi.validate(course, schema);
}

function updateCourseDescription(course) {
  const schema = {
    description: joi.string().required()
  };
  return joi.validate(course, schema);
}

function updateCourseGoals(course) {
  const schema = {
    goals: joi.string().required()
  };
  return joi.validate(course, schema);
}

module.exports = {
  Course,
  validateCourse,
  updateCourseTitle,
  updateCourseDescription,
  updateCourseGoals
};