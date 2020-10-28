import Tasks from '../models/tasks';
import * as Router from 'koa-router';
import * as koaBody from 'koa-body';

const router = new Router();


// router.prefix('/tasks');

router.get('/tasks/get', Tasks.getTasks);
router.get('/tasks/get/:id', Tasks.getTaskById);

router.post('/tasks/add', koaBody(), Tasks.addTask);

router.delete('/tasks/delete/:id', Tasks.deleteTaskById);


export default router.routes();