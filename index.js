require('dotenv').config();
const Koa = require("koa");
const routes = require("./routes")



const app = new Koa();

// Setup middlewares
// require("./passport");
// app.use(routes);



// Create the server
app.listen(process.env.PORT || 3001);
console.info(`${process.version} listening on port ${process.env.PORT || 3001}`);

