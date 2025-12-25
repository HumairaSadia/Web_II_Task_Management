const express = require('express');
const app = express();
app.use(express.json());

const taskRoutes = require('./src/routes/tasks'); 
app.use('/tasks', taskRoutes);

// Optional: test DB connection
const db = require('./models'); 
db.sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('DB connection error:', err));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
