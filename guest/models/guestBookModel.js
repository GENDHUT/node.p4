const db = require('./db'); // Pastikan file db.js ada di folder models

class GuestBook {
  // Mengambil semua data GuestBook
  static async getAll() {
    const [rows] = await db.query("SELECT * FROM GuestBook");
    return rows;
  }

  // Mengambil data GuestBook berdasarkan id
  static async getById(id) {
    const [rows] = await db.query("SELECT * FROM GuestBook WHERE GuestBookID = ?", [id]);
    return rows[0];
  }

  // Membuat data GuestBook baru
  static async create(data) {
    const { NamaTamu, EmailTamu, PhoneTamu, RoomID, CheckInTime, Notes } = data;
    const result = await db.query(
      "INSERT INTO GuestBook (NamaTamu, EmailTamu, PhoneTamu, RoomID, CheckInTime, Notes) VALUES (?, ?, ?, ?, ?, ?)",
      [NamaTamu, EmailTamu, PhoneTamu, RoomID || null, CheckInTime, Notes || null]
    );
    return result;
  }

  // Mengupdate data GuestBook
  static async update(id, data) {
    const { NamaTamu, EmailTamu, PhoneTamu, RoomID, CheckInTime, Notes } = data;
    const result = await db.query(
      "UPDATE GuestBook SET NamaTamu = ?, EmailTamu = ?, PhoneTamu = ?, RoomID = ?, CheckInTime = ?, Notes = ? WHERE GuestBookID = ?",
      [NamaTamu, EmailTamu, PhoneTamu, RoomID || null, CheckInTime, Notes || null, id]
    );
    return result;
  }

  // Menghapus data GuestBook
  static async delete(id) {
    const result = await db.query("DELETE FROM GuestBook WHERE GuestBookID = ?", [id]);
    return result;
  }
}

module.exports = GuestBook;
