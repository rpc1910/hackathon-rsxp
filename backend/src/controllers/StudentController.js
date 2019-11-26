const Student = require("../models/Student");

module.exports = {
  async index(req, res) {
    const { student } = req.headers;

    if (student) {
      const loggedStudent = await Student.findById(student);
      return res.status(200).json(loggedStudent);
    } else {
      const students = await Student.find();
      return res.status(200).json(students);
    }
  },

  async store(req, res) {
    const { name, school, className } = req.body;

    if (!name) {
      return res.status(400).json({ error: "name is necessary" });
    }
    if (!school) {
      return res.status(400).json({ error: "school is necessary" });
    }
    if (!className) {
      return res.status(400).json({ error: "className is necessary" });
    }

    const studentExists = await Student.findOne({ name });

    if (studentExists) {
      return res.status(400).json({ error: "student already exists" });
    }

    try {
      const student = await Student.create({
        name,
        school,
        className
      });
      return res.status(200).json(student);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
};
