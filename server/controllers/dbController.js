const Task = require('../models/Task');

async function getTasks(req, res) {
  try {
    // Fetch all tasks from MongoDB
    const tasks = await Task.find();
    
    // Send tasks back to frontend as JSON
    res.json(tasks);
  } catch (error) {
    // If something goes wrong, send error response
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
}

async function addTask(req, res) {
  try {
    // Get title from frontend request body
    const { title } = req.body;
    
    // Create new task (done defaults to false from schema)
    const newTask = await Task.create({ title });
    
    // Send the created task back to frontend
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add task' });
  }
}

async function toggleTask(req, res) {
  try {
    const taskId = req.params.id;
    
    const currentTask = await Task.findById(taskId);

    const updatedTask = await Task.findByIdAndUpdate(
      taskId, 
      { done: !currentTask.done },
      { new: true }
    );

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to toggle task' });
  }
}

async function deleteTask(req, res) {
  try {
    const taskId = req.params.id;
    await Task.findByIdAndDelete(taskId);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
}

module.exports = {
  getTasks,
  addTask,
  toggleTask,
  deleteTask,
};
