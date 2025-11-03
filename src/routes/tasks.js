const express = require('express');
const router = express.Router();

const tasks = [
  { id: 1, title: 'Learn Node.js', completed: true, priority: 'high', createdAt: '30-10-2025' },
  { id: 2, title: 'Build REST API', completed: false, priority: 'high', createdAt: '31-10-2025' },
  { id: 3, title: 'Test API', completed: true, priority: 'low', createdAt: '01-11-2025' },
  { id: 4, title: 'Push in Github', completed: true, priority: 'medium', createdAt: '02-11-2025' },
  { id: 5, title: 'Create final Project', completed: false, priority: 'medium', createdAt: '03-11-2025' }
];

router.get('/', (req, res) => res.json(tasks));

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (task) res.json(task);
  else res.status(404).json({ error: 'Task not found' });
});

module.exports = router; 
