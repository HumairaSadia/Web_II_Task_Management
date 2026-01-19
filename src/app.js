
const express = require('express');
const cors = require('cors'); // 1. Import the cors package
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middlewares/errorHandler');
const AppError = require('./utils/AppError');

const app = express();

// 2. Enable CORS so your React app (port 5173) can access this API (port 3000)
app.use(cors()); 

app.use(express.json());

// Routes
app.use('/api/v1/tasks', taskRoutes);

// Handle 404 for undefined routes
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global Error Handler
app.use(errorHandler);

module.exports = app;