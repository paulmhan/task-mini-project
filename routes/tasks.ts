import Tasks from '../models/tasks';
import * as Router from 'koa-router';
const router = new Router();


// router.prefix('/tasks');

router.get('/tasks/getAll', Tasks.getTasks);



export default router.routes();