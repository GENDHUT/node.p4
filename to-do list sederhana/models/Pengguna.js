import pool from '../config/db.js';

class Pengguna {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM pengguna ORDER BY created_at DESC');
    return rows;
  }

  static async create(nama, deskripsi) {
    const [result] = await pool.query(
      'INSERT INTO pengguna (nama, deskripsi) VALUES (?, ?)',
      [nama, deskripsi]
    );
    return result.insertId;
  }

  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM pengguna WHERE id = ?', [id]);
    return rows[0];
  }

  static async update(id, nama, deskripsi, status) {
    await pool.query(
      'UPDATE pengguna SET nama = ?, deskripsi = ?, status = ? WHERE id = ?',
      [nama, deskripsi, status, id]
    );
  }

  static async delete(id) {
    await pool.query('DELETE FROM pengguna WHERE id = ?', [id]);
  }
}

export default Pengguna;