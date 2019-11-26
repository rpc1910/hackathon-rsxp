const Course = require("../models/Course");

const seedCourses = [
  { _id: "5ddd7b2707f8b710adaf1e40", name: "Geografia" },
  { _id: "5ddd7b0707f8b710adaf1e3d", name: "Física" },
  { _id: "5ddd7ae807f8b710adaf1e3c", name: "Matemática" },
  { _id: "5ddd7b1107f8b710adaf1e3e", name: "Química" },
  { _id: "5ddd7b1c07f8b710adaf1e3f", name: "História" },
  { _id: "5ddd7b3107f8b710adaf1e41", name: "Filosofia" },
  { _id: "5ddd7b3c07f8b710adaf1e42", name: "Língua Portuguesa e Literatura" },
  { _id: "5ddd7b4907f8b710adaf1e43", name: "Língua Estrangeira" },
  { _id: "5ddd7b5107f8b710adaf1e44", name: "Biologia" }
];

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
  },

  async seed(req, res) {
    const courses = await Course.find();

    if (courses && courses.length > 0) {
      return res.status(200).json({ error: "already seeds data" });
    }

    try {
      const courses = await Carrer.insertMany(courseSeed);

      return res.status(200).json({ msg: "seeds complete", data: courses });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
};
