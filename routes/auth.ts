// declare var global: any;
const globalAny:any = global;
const jwt = require('jsonwebtoken');
// const Users = require('../models/auth');
const secret = process.env.JWT_SECRET || 'secret';

module.exports = async (ctx) => {
    const { email, password } = ctx.request.body;
    if (!email) ctx.throw(422, 'Email required.');
    if (!password) ctx.throw(422, 'Password required.');

    // const dbUser = Users.findUserByEmail;
    const [[dbUser]] = await globalAny.db.query(
        `SELECT * FROM users WHERE email = :email`,
        {
            email
        }
    );
    console.log("+++++++", dbUser);
    if (!dbUser) ctx.throw(401, 'No such user.');
    if (password === dbUser.password) {
      /* Sign and return the token just like before
       * except this time, sub is the actual database
       * user ID. */
      const payload = { sub: dbUser.userID };
      const token = jwt.sign(payload, secret);
      ctx.body = token;
    } else {
      ctx.throw(401, 'Incorrect password.');
    }
};