const axios = require("axios");
const Student = require("../models/Student");
const Course = require("../models/Course");

module.exports = {
  async index(req, res) {
    const { student } = req.headers;

    const loggedStudent = await Student.findById(student);

    return res.json(loggedStudent);
  },

  async store(req, res) {
    const { schoolName, studentName, className } = req.body;

    const studentExists = await Student.findOne({ name: studentName });

    if (studentExists) {
      return res.json(studentExists);
    }

    const student = await Student.create({
      name: studentName,
      school: schoolName,
      class: className
    });

    return res.json(student);
  }
};
