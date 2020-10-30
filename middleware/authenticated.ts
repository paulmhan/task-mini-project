// const jwt = require('jsonwebtoken');
import * as jwt from 'jsonwebtoken';

module.exports = async (ctx, next) => {
    if (!ctx.headers.authorization) ctx.throw(403, 'No token.');
    await next();
  };