import Todo from '../models/Todo.js';

class TodoController {
  static async index(req, res) {
    try {
      const todos = await Todo.getAll();
      res.render('todos/index', { todos, error: null });
    } catch (error) {
      res.render('todos/index', { todos: [], error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const { title, description } = req.body;
      await Todo.create(title, description);
      res.redirect('/');
    } catch (error) {
      const todos = await Todo.getAll();
      res.render('todos/index', { todos, error: error.message });
    }
  }

  static async edit(req, res) {
    try {
      const { id } = req.params;
      const todo = await Todo.getById(id);
      res.render('todos/edit', { todo, error: null });
    } catch (error) {
      res.render('todos/edit', { todo: null, error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { title, description, status } = req.body;
      await Todo.update(id, title, description, status);
      res.redirect('/');
    } catch (error) {
      const todo = await Todo.getById(req.params.id);
      res.render('todos/edit', { todo, error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await Todo.delete(id);
      res.redirect('/');
    } catch (error) {
      const todos = await Todo.getAll();
      res.render('todos/index', { todos, error: error.message });
    }
  }

  static async toggleStatus(req, res) {
    try {
      const { id } = req.params;
      const todo = await Todo.getById(id);
      const newStatus = todo.status === 'completed' ? 'pending' : 'completed';
      await Todo.update(id, todo.title, todo.description, newStatus);
      res.redirect('/');
    } catch (error) {
      const todos = await Todo.getAll();
      res.render('todos/index', { todos, error: error.message });
    }
  }
}

export default TodoController;