const GuestBook = require('../models/guestBookModel');
const Room = require('../models/roomModel');
const db = require('../models/db');


exports.index = async (req, res) => {
  const guests = await GuestBook.getAll();
  res.render('guestbook/index', { guests });
};

exports.add = async (req, res) => {
  // Hanya ambil ruangan yang berstatus 'Available'
  const rooms = await Room.getAvailable();
  res.render('guestbook/add', { rooms });
};

exports.create = async (req, res) => {
  // Simpan data tamu baru
  await GuestBook.create(req.body);
  
  // Jika RoomID diisi, ubah status ruangan tersebut menjadi 'Occupied'
  if (req.body.RoomID) {
    await Room.updateStatus(req.body.RoomID, 'Occupied');
  }
  
  res.redirect('/guestbook');
};

exports.edit = async (req, res) => {
  const guest = await GuestBook.getById(req.params.id);
  // Untuk form edit, kita bisa ambil semua ruangan atau hanya yang available,
  // tergantung kebutuhan. Misalnya: ambil semua ruangan dan tandai yang dipilih.
  const rooms = await Room.getAll();
  res.render('guestbook/edit', { guest, rooms });
};

exports.update = async (req, res) => {
  await GuestBook.update(req.params.id, req.body);
  res.redirect('/guestbook');
};

exports.delete = async (req, res) => {
  await GuestBook.delete(req.params.id);
  res.redirect('/guestbook');
};
