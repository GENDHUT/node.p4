import express from 'express';
import PenggunaController from '../controller/PenggunaController.js';

const router = express.Router();

router.get('/', PenggunaController.index);
router.get('/create', PenggunaController.create); 
router.post('/store', PenggunaController.store);
router.post('/delete/:id', PenggunaController.delete); 
router.get('/edit/:id', PenggunaController.edit); // Adjusted route
router.post('/update/:id', PenggunaController.update); 

export default router;