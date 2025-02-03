import PenggunaModel from '../models/Pengguna.js';

class PenggunaController {
  // Menampilkan daftar pengguna
  static async index(req, res) {
    try {
      const penggunaList = await PenggunaModel.getAll();
      res.render('pengguna/index', { pengguna: penggunaList, error: null });
    } catch (error) {
      res.render('pengguna/index', { pengguna: [], error: error.message });
    }
  }

  // Menambahkan pengguna baru
  static async create(req, res) {
    try {
      const { pengguna, description } = req.body;
      // Validasi input
      if (!pengguna || !description) {
        return res.render('pengguna/index', { error: 'Nama dan deskripsi harus diisi', pengguna: [] });
      }
      await PenggunaModel.create(pengguna, description);
      res.redirect('/pengguna'); // Setelah menambah pengguna, arahkan ke daftar pengguna
    } catch (error) {
      const penggunaList = await PenggunaModel.getAll();
      res.render('pengguna/index', { pengguna: penggunaList, error: error.message });
    }
  }

  // // Mengedit pengguna
  // static async edit(req, res) {
  //   try {
  //     const { id } = req.params;
  //     const pengguna = await PenggunaModel.getById(id);
  //     if (!pengguna) {
  //       return res.render('pengguna/edit', { error: 'Pengguna tidak ditemukan', pengguna: null });
  //     }
  //     res.render('pengguna/edit', { pengguna, error: null });
  //   } catch (error) {
  //     res.render('pengguna/edit', { pengguna: null, error: error.message });
  //   }
  // }

  static async edit(req, res) {
    try {
      const { id } = req.params;
      const pengguna = await PenggunaModel.getById(id); // Pastikan case-sensitive
      
      if (!pengguna) {
        return res.render('pengguna/edit', { 
          pengguna: null, 
          error: 'Pengguna tidak ditemukan' 
        });
      }
      
      res.render('pengguna/edit', { pengguna, error: null });
    } catch (error) {
      res.render('pengguna/edit', { 
        pengguna: null, 
        error: error.message 
      });
    }
  }

  // Memperbarui pengguna
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { pengguna, description, status } = req.body;

      // Validasi input
      if (!pengguna || !description) {
        return res.render('pengguna/edit', { error: 'Nama dan deskripsi harus diisi', pengguna: { id, pengguna, description, status } });
      }

      await PenggunaModel.update(id, pengguna, description, status);
      res.redirect('/pengguna'); // Setelah update, arahkan ke daftar pengguna
    } catch (error) {
      const pengguna = await PenggunaModel.getById(req.params.id);
      res.render('pengguna/edit', { pengguna, error: error.message });
    }
  }

  // Menghapus pengguna
  static async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.redirect('/pengguna');
      }
      await PenggunaModel.delete(id); // Menghapus pengguna berdasarkan id
      res.redirect('/pengguna'); // Arahkan kembali ke halaman daftar pengguna
    } catch (error) {
      const penggunaList = await PenggunaModel.getAll();
      res.render('pengguna/index', { pengguna: penggunaList, error: error.message });
    }
  }

  // Menukar status pengguna
  static async toggleStatus(req, res) {
    try {
      const { id } = req.params;
      const pengguna = await PenggunaModel.getById(id);
      const newStatus = pengguna.status === 'completed' ? 'pending' : 'completed';
      await PenggunaModel.update(id, pengguna.pengguna, pengguna.description, newStatus);
      res.redirect('/pengguna');
    } catch (error) {
      const penggunaList = await PenggunaModel.getAll();
      res.render('pengguna/index', { pengguna: penggunaList, error: error.message });
    }
  }
}

export default PenggunaController;
