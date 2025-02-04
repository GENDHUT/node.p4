const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.get('/', roomController.index);
router.get('/add', roomController.add);
router.post('/add', roomController.create);
router.get('/edit/:id', roomController.edit);
router.post('/edit/:id', roomController.update);
router.get('/delete/:id', roomController.delete);

module.exports = router;
