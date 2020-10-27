const { Tasks } = require('../models/tasks.ts');
const Router = require('koa-router');
const router = new Router();


router.prefix('/tasks');

router.get('/add', Tasks.addTask);



module.exports = router.routes();