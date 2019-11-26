const { Schema, model } = require("mongoose");

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  }
});

module.exports = model("Course", CourseSchema);
