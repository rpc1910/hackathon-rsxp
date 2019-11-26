
const Course = require("../models/Course");

module.exports = {
  async index(req, res) {
    const courses = await Course.findOne({id:1});

    return res.json(courses);
  },

  async store(req, res) {
    const { courseName } = req.body;

    const courseExists = await Course.findOne({ name: courseName });

    if (courseExists) {
      return res.json(courseExists);
    }

    const course = await Course.create({
      name: courseName
    });

    return res.json(course);
  }
};
