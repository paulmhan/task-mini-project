import Tasks from '../models/tasks';
import * as Router from 'koa-router';

const router = new Router();


// router.prefix('/tasks');

router.get('/tasks/get', Tasks.getTasks);
router.get('/tasks/get/:id', Tasks.getTaskById);

router.post('/tasks/add', Tasks.addTask);


export default router.routes();