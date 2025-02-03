import express from 'express';
import TaskController from '../controllers/TaskController.js';

const router = express.Router();

router.get('/tasks', TaskController.index);
router.get('/tasks/create', TaskController.showCreateForm);
router.post('/tasks', TaskController.create);
router.get('/tasks/:id/edit', TaskController.showEditForm);
router.post('/tasks/:id/update', TaskController.update);
router.post('/tasks/:id/delete', TaskController.delete);

export default router;