const getAllTasks = (req, res) => {
  res.send("All Items");
};
const createTask = (req, res) => {
  res.send("Create Task");
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
