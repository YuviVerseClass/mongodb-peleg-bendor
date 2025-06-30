# 📋 MongoDB To-Do App Progress

## 🎯 Overall Goal
Build a full backend connection to a MongoDB database using Node.js, Express, and Mongoose.

## ✅ Completed Tasks
- [x] Initial project review and planning

## 🔄 Current Task
- [x] **Environment Setup** ✅ COMPLETE
  - [x] Check Node.js/npm installation ✅ Node.js v22.16.0 found
  - [x] Fix npm PowerShell issue (switch to cmd) ✅ npm v10.9.2 working
  - [x] Run `npm install` to install dependencies ✅ 99 packages installed
  - [x] Create MongoDB Atlas account ✅ Cluster0 created and running
  - [x] Set up `.env` file with MongoDB connection string ✅ Connection ready

## 🔄 Current Task
- [ ] **Create Task Model** (`models/Task.js`)
  - Define schema: title (String, required), done (Boolean, default: false)

## 📋 Upcoming Tasks
- [ ] **Create Task Model** (`models/Task.js`)
  - Define schema: title (String, required), done (Boolean, default: false)
  
- [ ] **Implement Database Controller** (`controllers/dbController.js`)
  - `getTasks`: return all tasks
  - `addTask`: add task from req.body.title
  - `toggleTask`: toggle done field
  - `deleteTask`: remove task by ID
  
- [ ] **Wire Up API Routes** (`routes/api.js`)
  - GET /tasks → getTasks
  - POST /tasks → addTask  
  - PATCH /tasks/:id → toggleTask
  - DELETE /tasks/:id → deleteTask
  
- [ ] **Test Everything Together**
  - Start server
  - Test frontend with backend
  - Verify MongoDB operations

