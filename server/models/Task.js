const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  done: { type: Boolean, default: false }
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;