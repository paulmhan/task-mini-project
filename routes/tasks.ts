import Tasks from '../models/tasks';
import * as Router from 'koa-router';

const router = new Router();

router.get('/tasks/get', Tasks.getTasks);
router.get('/tasks/get/:id', Tasks.getTaskById);
router.get('/subtasks/get/:id', Tasks.getSubTaskById)

router.post('/tasks/add', Tasks.addTask);

router.delete('/tasks/delete/:id', Tasks.deleteTaskById);


export default router.routes();