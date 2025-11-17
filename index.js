const express = require('express');
const app = express();
app.use(express.json());
const taskRouter = require('./src/routes/tasks');
app.use('/tasks', taskRouter);

const tasks = [
  { id: 1, title: 'Sample Task', completed: false,createdAt: new Date("2025-11-17") },
  { id: 2, title: 'GET request', completed: true,createdAt: new Date("2025-11-17") },
  { id: 3, title: 'POST request', completed: false,createdAt: new Date("2025-11-17")},
  { id: 4, title: 'Test API', completed: true,createdAt: new Date("2025-11-17")},
  { id: 5, title: 'Push in GitHub', completed: false,createdAt: new Date("2025-11-17")}

];

app.locals.tasks = tasks;

app.get('/health', (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime()
  });
});
app.get('/task/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  const task = app.locals.tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log(`Open this → http://localhost:${PORT}/tasks`);
});
