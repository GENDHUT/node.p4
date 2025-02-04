const db = require('./db');

class Room {
  // Ambil semua data ruangan (opsional)
  static async getAll() {
    const [rows] = await db.query("SELECT * FROM Room");
    return rows;
  }

  // Ambil ruangan yang berstatus 'Available'
  static async getAvailable() {
    const [rows] = await db.query("SELECT * FROM Room WHERE Status = 'Available'");
    return rows;
  }

  // Ambil ruangan berdasarkan RoomID
  static async getById(id) {
    const [rows] = await db.query("SELECT * FROM Room WHERE RoomID = ?", [id]);
    return rows[0];
  }

  // Buat ruangan baru (jika diperlukan)
  static async create(data) {
    const { RoomNumber, RoomType, Price, Status } = data;
    const result = await db.query(
      "INSERT INTO Room (RoomNumber, RoomType, Price, Status) VALUES (?, ?, ?, ?)",
      [RoomNumber, RoomType, Price, Status || 'Available']
    );
    return result;
  }

  // Update ruangan
  static async update(id, data) {
    const { RoomNumber, RoomType, Price, Status } = data;
    const result = await db.query(
      "UPDATE Room SET RoomNumber = ?, RoomType = ?, Price = ?, Status = ? WHERE RoomID = ?",
      [RoomNumber, RoomType, Price, Status, id]
    );
    return result;
  }

  // Update status ruangan
  static async updateStatus(roomId, status) {
    const result = await db.query("UPDATE Room SET Status = ? WHERE RoomID = ?", [status, roomId]);
    return result;
  }

  // Hapus ruangan (jika diperlukan)
  static async delete(id) {
    const result = await db.query("DELETE FROM Room WHERE RoomID = ?", [id]);
    return result;
  }
}

module.exports = Room;
