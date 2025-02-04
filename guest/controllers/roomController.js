const Room = require('../models/roomModel');

exports.index = async (req, res) => {
  const rooms = await Room.getAll();
  res.render('room/index', { rooms });
};

exports.add = (req, res) => {
  res.render('room/add');
};

exports.create = async (req, res) => {
  await Room.create(req.body);
  res.redirect('/room');
};

exports.edit = async (req, res) => {
  const room = await Room.getById(req.params.id);
  res.render('room/edit', { room });
};

exports.update = async (req, res) => {
  await Room.update(req.params.id, req.body);
  res.redirect('/room');
};

exports.delete = async (req, res) => {
  await Room.delete(req.params.id);
  res.redirect('/room');
};
