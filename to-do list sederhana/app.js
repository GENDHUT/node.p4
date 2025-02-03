import express from 'express';
import TodoController from './controllers/TodoController.js';
import PenggunaController from './controllers/PenggunaController.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
// Todo routes (for reference)
app.get('/', TodoController.index);
app.post('/todos', TodoController.create);
app.get('/todos/:id/edit', TodoController.edit);
app.post('/todos/:id', TodoController.update);
app.post('/todos/:id/delete', TodoController.delete);
app.post('/todos/:id/status', TodoController.toggleStatus);

// Pengguna routes
app.get('/pengguna', PenggunaController.index);  // Menampilkan daftar pengguna
app.post('/pengguna', PenggunaController.create);  // Menambahkan pengguna
app.get('/pengguna/:id/edit', PenggunaController.edit);  // Halaman edit pengguna
app.post('/pengguna/:id', PenggunaController.update);  // Memperbarui pengguna
app.post('/pengguna/:id/delete', PenggunaController.delete);  // Menghapus pengguna
app.post('/pengguna/:id/status', PenggunaController.toggleStatus);  // Mengubah status pengguna

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
