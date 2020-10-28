declare var global: any;
// const TaskRoutes = require('./routes/tasks.ts');
require('dotenv').config();

import TaskRoutes from './routes/tasks';
import AuthRoutes from './routes/auth';
import * as Koa from 'koa';
import * as cors from 'koa2-cors';
import * as mysql from 'mysql2/promise';
import * as bodyParser from 'koa-bodyparser';
import * as session from 'koa-session';


const app = new Koa();

// sessions
app.keys = ['super-secret-key'];
app.use(session(app));

//cors
app.use(cors({
    'Access-Control-Allow-Origin': '*',
    allowMethods: ['GET', 'POST', 'DELETE'],
}));

// body parser
app.use(bodyParser());


const connection = {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};
const pool = mysql.createPool(connection);


app.use(async function dbConnection(ctx, next){
    ctx.state.db = global.db = await pool.getConnection();
    ctx.state.db.connection.config.namedPlaceholders = true;
    await next();
    ctx.state.db.release();
})


app.use(TaskRoutes);
app.use(AuthRoutes);

// Create the server
app.listen(process.env.PORT || 3001);
console.info(`${process.version} listening on port ${process.env.PORT || 3001}`);

module.exports = app

