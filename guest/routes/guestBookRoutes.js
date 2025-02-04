// routes/guestBookRoutes.js
const express = require('express');
const router = express.Router();
const guestBookController = require('../controllers/guestBookController');

router.get('/', guestBookController.index);
router.get('/add', guestBookController.add);
router.post('/add', guestBookController.create);
router.get('/edit/:id', guestBookController.edit);
router.post('/edit/:id', guestBookController.update);
router.get('/delete/:id', guestBookController.delete);

module.exports = router;
