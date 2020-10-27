require('dotenv').config();

const TaskRoutes = require('./routes/tasks.ts');
const Koa = require('koa');
const app = new Koa();


app.use(TaskRoutes);




// Create the server
app.listen(process.env.PORT || 3001);
console.info(`${process.version} listening on port ${process.env.PORT || 3001}`);

module.exports = app

