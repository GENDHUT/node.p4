import Pengguna from '../models/Pengguna.js';

class PenggunaController {
  static async index(req, res) {
    try {
      const penggunaList = await Pengguna.getAll();
      res.render('pengguna/index', { 
        penggunaList, 
        error: null 
      });
    } catch (error) {
      res.render('pengguna/index', { 
        penggunaList: [], 
        error: error.message 
      });
    }
  }

  static async create(req, res) {
    try {
      const { nama, deskripsi } = req.body;
      await Pengguna.create(nama, deskripsi);
      res.redirect('/pengguna');
    } catch (error) {
      const penggunaList = await Pengguna.getAll();
      res.render('pengguna/index', { 
        penggunaList, 
        error: error.message 
      });
    }
  }

  static async edit(req, res) {
    try {
      const { id } = req.params;
      const pengguna = await Pengguna.getById(id);
      res.render('pengguna/edit', { 
        pengguna, 
        error: null 
      });
    } catch (error) {
      res.render('pengguna/edit', { 
        pengguna: null, 
        error: error.message 
      });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { nama, deskripsi, status } = req.body;
      await Pengguna.update(id, nama, deskripsi, status);
      res.redirect('/pengguna');
    } catch (error) {
      const pengguna = await Pengguna.getById(req.params.id);
      res.render('pengguna/edit', { 
        pengguna, 
        error: error.message 
      });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await Pengguna.delete(id);
      res.redirect('/pengguna');
    } catch (error) {
      const penggunaList = await Pengguna.getAll();
      res.render('pengguna/index', { 
        penggunaList, 
        error: error.message 
      });
    }
  }

  static async toggleStatus(req, res) {
    try {
      const { id } = req.params;
      const pengguna = await Pengguna.getById(id);
      const newStatus = pengguna.status === 'active' ? 'inactive' : 'active';
      await Pengguna.update(id, pengguna.nama, pengguna.deskripsi, newStatus);
      res.redirect('/pengguna');
    } catch (error) {
      const penggunaList = await Pengguna.getAll();
      res.render('pengguna/index', { 
        penggunaList, 
        error: error.message 
      });
    }
  }
}

export default PenggunaController;