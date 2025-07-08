const express = require('express');
const router = express.Router();

// Import your controller functions
const db = require('../controllers/dbController');

// Wire each route to its controller method:
router.get('/tasks', db.getTasks);           // GET /api/tasks
router.post('/tasks', db.addTask);           // POST /api/tasks  
router.patch('/tasks/:id', db.toggleTask);   // PATCH /api/tasks/:id
router.delete('/tasks/:id', db.deleteTask);  // DELETE /api/tasks/:id

module.exports = router;