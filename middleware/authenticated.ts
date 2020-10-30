// const jwt = require('jsonwebtoken');
import * as jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET || 'secret';

module.exports = async (ctx, next) => {
    if (!ctx.headers.authorization) ctx.throw(403, 'No token.');
    const token = ctx.headers.authorization.split(' ')[1];
    console.log("TOKEN:", token);
    try {
        ctx.request.jwtPayload = jwt.verify(token, secret);
        console.log("jwtPayload:", ctx.request.jwtPayload);
    } catch (err) {
        ctx.throw(err.status || 403, err.text);
    }
    await next();
  };