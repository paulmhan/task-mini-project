// declare var global: any;
const globalAny:any = global;
// const jwt = require('jsonwebtoken');
import * as jwt from 'jsonwebtoken';
const bcrypt = require('../utilities/bcrypt.ts');
const secret = process.env.JWT_SECRET || 'secret';
const wrongUserPassMsg = 'Incorrect username and/or password.';

module.exports = async (ctx) => {
    const { email, password } = ctx.request.body;
    console.log("Server is hit");
    if (!email) ctx.throw(422, 'Email required.');
    if (!password) ctx.throw(422, 'Password required.');

    // const dbUser = Users.findUserByEmail;
    const [[dbUser]] = await globalAny.db.query(
        `SELECT * FROM users WHERE email = :email`,
        {
            email
        }
    );
    // console.log("+++++++", dbUser);
    if (!dbUser) ctx.throw(401, wrongUserPassMsg);
    if (await bcrypt.compare(password, dbUser.password)) {
      // payload: the actual data we want to store in the token
      // secret: a secret key that we sign the token with. 
      // Only our server will know the secret, 
      const payload = { sub: dbUser.userID };
      const token = jwt.sign(payload, secret);
      ctx.body = { token };
    } else {
      ctx.throw(401, wrongUserPassMsg);
    }
};