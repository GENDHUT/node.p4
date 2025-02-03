import pool from '../config/db.js';

class Todo {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM todos ORDER BY created_at DESC');
    return rows;
  }

  static async create(title, description) {
    const [result] = await pool.query(
      'INSERT INTO todos (title, description) VALUES (?, ?)',
      [title, description]
    );
    return result.insertId;
  }

  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM todos WHERE id = ?', [id]);
    return rows[0];
  }

  static async update(id, title, description, status) {
    await pool.query(
      'UPDATE todos SET title = ?, description = ?, status = ? WHERE id = ?',
      [title, description, status, id]
    );
  }

  static async delete(id) {
    await pool.query('DELETE FROM todos WHERE id = ?', [id]);
  }
}

export default Todo;