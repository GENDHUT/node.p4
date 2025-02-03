import pool from '../config/database.js';

const Task = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);
    return rows[0];
  },

  create: async (taskData) => {
    const [result] = await pool.query(
      'INSERT INTO tasks (title, description) VALUES (?, ?)',
      [taskData.title, taskData.description]
    );
    return { id: result.insertId, ...taskData };
  },

  update: async (id, taskData) => {
    await pool.query(
      'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?',
      [taskData.title, taskData.description, taskData.status, id]
    );
    return { id, ...taskData };
  },

  delete: async (id) => {
    await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
    return true;
  }
};

export default Task;