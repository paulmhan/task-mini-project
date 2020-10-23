const Router = require("koa-router");
const router = new Router();

router.use('/auth', authRoutes);
router.use('/tasks', requireAuth, getTasks)