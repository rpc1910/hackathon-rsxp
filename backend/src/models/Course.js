const { Schema, model } = require("mongoose");

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});
