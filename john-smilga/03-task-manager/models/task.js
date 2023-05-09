// modals are the representation for the collection
// A model is a Wrapper for a schema
// if the schema defines the structure for the document, like the validations and etc.
// A mongo model provides an interface to the database
// So using the model will be able to create , update, query and delete our documents with great ease

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
