// require('dotenv').config();
const Koa = require("koa");


const app = new Koa();


// Create the server
app.listen(process.env.PORT || 3000);
console.info(`${process.version} listening on port ${process.env.PORT || 3000}`);

