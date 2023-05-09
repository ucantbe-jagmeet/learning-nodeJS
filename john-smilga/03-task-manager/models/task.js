// modals are the representation for the collection
// A model is a Wrapper for a schema
// if the schema defines the structure for the document, like the validations and etc.
// A mongo model provides an interface to the database
// So using the model will be able to create , update, query and delete our documents with great ease

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can't be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
