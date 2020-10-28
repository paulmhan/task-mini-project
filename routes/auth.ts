import Users from '../models/auth';
import * as Router from 'koa-router';


const router = new Router();

router.get('/users', Users.getUsers)
router.get('/users/get/:id', Users.getUserById);
router.get('/users/:name', Users.getUserByName);

export default router.routes();
