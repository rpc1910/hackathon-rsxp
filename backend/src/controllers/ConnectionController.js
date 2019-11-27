const Student = require("../models/Student");

module.exports = {
  async store(req, res) {
    const { student } = req.headers;
    const { studentId } = req.params;

    if (!studentId) {
      return res.status(400).json({ error: "studentId is necessary" });
    }

    const loggedStudent = await Student.findById(student);
    let targetStudent = null;

    if (!loggedStudent) {
      return res.status(400).json({ error: "Student not found" });
    }

    try {
      targetStudent = await Student.findById(studentId);
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Student to connection not exists" });
    }

    let message = "";
    if (loggedStudent.connections.includes(targetStudent._id)) {
      message = removeConnection(loggedStudent, targetStudent);
    } else {
      message = createConnection(loggedStudent, targetStudent);
    }

    await loggedStudent.save();

    return res.json({ data: loggedStudent, message });
  }
};

const createConnection = (loggedStudent, targetStudent) => {
  loggedStudent.connections.push(targetStudent._id);
  return "Connection created.";
};

const removeConnection = (loggedStudent, targetStudent) => {
  loggedStudent.connections.splice(
    loggedStudent.connections.indexOf(targetStudent._id),
    1
  );
  return "Connection removed.";
};
