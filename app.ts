declare var global: any;

require('dotenv').config();

// import TaskRoutes from './routes/tasks';
// import AuthRoutes from './routes/auth';
// import errorHandler from './middleware/errorHandler';
const errorHandler = require('./middleware/errorHandler');
const authRoute = require('./routes/auth');

import * as Koa from 'koa';
import * as cors from 'koa2-cors';
import * as mysql from 'mysql2/promise';
import * as bodyParser from 'koa-bodyparser';
import * as Router from 'koa-router'


const app = new Koa();
const router = new Router();

//middlewares
app.use(errorHandler);
app.use(cors({
    'Access-Control-Allow-Origin': '*',
    allowMethods: ['GET', 'POST', 'DELETE'],
}));
app.use(bodyParser());


//establish connection to db
const connection = {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};
const pool = mysql.createPool(connection);

app.use(async function dbConnection(ctx, next) {
    ctx.state.db = global.db = await pool.getConnection();
    ctx.state.db.connection.config.namedPlaceholders = true;
    await next();
    ctx.state.db.release();
})

router.post('/auth', authRoute);



app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(process.env.PORT || 3001);
console.info(`${process.version} listening on port ${process.env.PORT || 3001}`);

module.exports = app

