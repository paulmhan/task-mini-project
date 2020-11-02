// declare var global: any;
const globalAny: any = global;
// const jwt = require('jsonwebtoken');
import * as jwt from 'jsonwebtoken';
const bcrypt = require('../utilities/bcrypt.ts');
const secret = process.env.JWT_SECRET || 'secret';
const wrongUserPassMsg = 'Incorrect username and/or password.';

export class Auth {

  static async login(ctx) {
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

  static async signup(ctx) {
    const { email, password } = ctx.request.body;
    let hashedPassword = await bcrypt.hash(password);
    console.log(email, hashedPassword);
    const [dbUser] = await globalAny.db.query(
      `INSERT INTO users (email, password) VALUES (:email, :hashedPassword)`,
      {
        email,
        hashedPassword
      }
    );
    console.log("dbUser", dbUser);
    const payload = { sub: dbUser.insertId };
    const token = jwt.sign(payload, secret);
    ctx.body = { token };
  }
}