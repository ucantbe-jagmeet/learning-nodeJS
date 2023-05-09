const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.send("all items from the File");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("Update Task");
};

const deleteTask = (req, res) => {
  res.send("Delete Task");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
