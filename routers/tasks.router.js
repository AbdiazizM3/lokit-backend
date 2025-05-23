const express = require("express");
const {
  getAllTasks,
  getTask,
  postTask,
  patchTask,
  deleteTask,
} = require("../controllers/tasks.controller");

const tasksRouter = express.Router({ mergeParams: true });

tasksRouter.get("/", getAllTasks);
tasksRouter.post("/", postTask);

tasksRouter.get("/:task_id", getTask);
tasksRouter.patch("/:task_id", patchTask);
tasksRouter.delete("/:task_id", deleteTask);

module.exports = tasksRouter;
