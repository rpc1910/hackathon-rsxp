const express = require("express");
const StudentController = require("./controllers/StudentController");
const ConnectionController = require("./controllers/ConnectionController");
const CourseController = require("./controllers/CourseController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");
const CarrerController = require("./controllers/CarrerController");

const routes = express.Router();

//routes.get("/", (req, res) => {res.send("on")});

routes.get("/courses", CourseController.index);
routes.post("/courses", CourseController.store);
routes.post("/courses/seed", CourseController.seed);

routes.get("/students", StudentController.index);
routes.post("/students", StudentController.store);

routes.post("/students/:courseId/likes", LikeController.store);
routes.post("/students/:courseId/dislikes", DislikeController.store);
routes.post("/students/:studentId/connections", ConnectionController.store);

routes.get("/carrers", CarrerController.index);
routes.post("/carrers/seed", CarrerController.seed);

module.exports = routes;
