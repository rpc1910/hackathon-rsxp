const { Schema, model } = require("mongoose");

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course"
    }
  ],
  dislikes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course"
    }
  ]
});
