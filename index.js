const express = require('express');
const app = express();
const port = 3000;

// Import tasks router
const tasksRouter = require('./src/routes/tasks');

// Root route
app.get('/', (req, res) => res.send('Task Management API is running!'));

// Health route
app.get('/health', (req, res) => res.json({ status: 'healthy', uptime: process.uptime() }));

// Use tasks router
app.use('/tasks', tasksRouter);

// Start server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
