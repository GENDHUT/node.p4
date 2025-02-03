import Task from '../models/Task.js';

const TaskController = {
  index: async (req, res) => {
    try {
      const tasks = await Task.getAll();
      res.render('tasks/index', { tasks });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  showCreateForm: (req, res) => {
    res.render('tasks/create');
  },

  create: async (req, res) => {
    try {
      await Task.create(req.body);
      res.redirect('/tasks');
    } catch (error) {
      res.status(400).render('tasks/create', { 
        error: error.message,
        task: req.body
      });
    }
  },

  showEditForm: async (req, res) => {
    try {
      const task = await Task.getById(req.params.id);
      res.render('tasks/edit', { task });
    } catch (error) {
      res.status(404).send('Task not found');
    }
  },

  update: async (req, res) => {
    try {
      await Task.update(req.params.id, req.body);
      res.redirect('/tasks');
    } catch (error) {
      res.status(400).render('tasks/edit', { 
        error: error.message,
        task: { id: req.params.id, ...req.body }
      });
    }
  },

  delete: async (req, res) => {
    try {
      await Task.delete(req.params.id);
      res.redirect('/tasks');
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

export default TaskController;