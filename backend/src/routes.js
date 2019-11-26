const express = require("express");
const StudentController = require("./controllers/StudentController");
const CourseController = require("./controllers/CourseController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("on");
});

routes.get("/courses", CourseController.index);
routes.post("/courses", CourseController.store);

routes.get("/students", StudentController.index);
routes.post("/students", StudentController.store);

routes.post("/students/:courseId/likes", LikeController.store);
routes.post("/students/:courseId/dislikes", DislikeController.store);

module.exports = routes;
