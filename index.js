require('dotenv').config();
const Koa = require("koa");
const Router = require("koa-router");


const app = new Koa();
const router = new Router();




// Create the server
app.listen(process.env.PORT || 3001);
console.info(`${process.version} listening on port ${process.env.PORT || 3001}`);

