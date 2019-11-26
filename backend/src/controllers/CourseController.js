const Course = require("../models/Course");

module.exports = {
  async index(req, res) {
    const { area } = req.query;

    let courses = [];

    if (area) {
      courses = await Course.find({ area: area });
    } else {
      courses = await Course.find();
    }

    return res.status(200).json(courses);
  },

  async store(req, res) {
    const { name, area } = req.body;

    if (!name) {
      return res.status(400).json({ error: "name is necessary" });
    }
    if (!area) {
      return res.status(400).json({ error: "area is necessary" });
    }

    const courseExists = await Course.findOne({ name });

    if (courseExists) {
      return res.status(400).json({ error: "course already exists" });
    }

    try {
      const course = await Course.create({
        name,
        area
      });

      return res.status(200).json(course);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
};
