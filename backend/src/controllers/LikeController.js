const Student = require("../models/Student");
const Course = require("../models/Course");

module.exports = {
  async store(req, res) {
    const { student } = req.headers;
    const { courseId } = req.params;

    if (!courseId) {
      return res.status(400).json({ error: "courseId is necessary" });
    }

    const loggedStudent = await Student.findById(student);
    let targetCourse = null;

    if (!loggedStudent) {
      return res.status(400).json({ error: "user not found" });
    }

    try {
      targetCourse = await Course.findById(courseId);
    } catch (error) {
      return res.status(400).json({ error: "Course not exists" });
    }

    if (
      loggedStudent.dislikes.includes(targetCourse._id) ||
      loggedStudent.likes.includes(targetCourse._id)
    ) {
      return res.status(400).json({ error: "Already exist vote." });
    }

    loggedStudent.likes.push(targetCourse._id);

    await loggedStudent.save();

    return res.json(loggedStudent);
  }
};
