const { Schema, model } = require("mongoose");

const CarrerSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  laymanTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course"
    }
  ]
});

module.exports = model("Carrer", CarrerSchema);
