const Task = require("../models/Task");
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTask = (req, res) => {
  res.send("get single Task");
};
const updateTask = (req, res) => {
  res.send("Update Task");
};
const deleteTask = (req, res) => {
  res.send("deleteTask");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
