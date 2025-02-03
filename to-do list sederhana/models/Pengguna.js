import pool from '../config/db.js';

class Pengguna {
  // Mengambil semua pengguna
  static async getAll() {
    try {
      const [rows] = await pool.query('SELECT * FROM pengguna ORDER BY created_at DESC');
      return rows;
    } catch (error) {
      throw new Error('Error fetching pengguna: ' + error.message);
    }
  }

  // Menambahkan pengguna baru
  static async create(pengguna, description) {
    try {
      const [result] = await pool.query(
        'INSERT INTO pengguna (pengguna, description) VALUES (?, ?)',
        [pengguna, description]
      );
      return result.insertId;  // Mengembalikan ID pengguna yang baru ditambahkan
    } catch (error) {
      throw new Error('Error creating pengguna: ' + error.message);
    }
  }

  // Mengambil pengguna berdasarkan ID
  static async getById(id) {
    try {
      const [rows] = await pool.query('SELECT * FROM pengguna WHERE id = ?', [id]);
      return rows[0] || null; // Return null jika tidak ada data
    } catch (error) {
      throw new Error('Error fetching pengguna by id: ' + error.message);
    }
  }

  // Mengupdate pengguna
  static async update(id, pengguna, description, status) {
    try {
      await pool.query(
        'UPDATE pengguna SET pengguna = ?, description = ?, status = ? WHERE id = ?',
        [pengguna, description, status, id]
      );
    } catch (error) {
      throw new Error('Error updating pengguna: ' + error.message);
    }
  }

  // Menghapus pengguna
  static async delete(id) {
    try {
      await pool.query('DELETE FROM pengguna WHERE id = ?', [id]);
    } catch (error) {
      throw new Error('Error deleting pengguna: ' + error.message);
    }
  }
}

export default Pengguna;
