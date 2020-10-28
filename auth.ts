declare var global: any;
import * as passport from 'koa-passport';
import User from './models/auth'

const LocalStrategy = require('passport-local').Strategy;
const options = {};

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.getUserById(id).then((user) => { done(null, user); })
        .catch((err) => { done(err, null); });
});

passport.use(new LocalStrategy(options, (username, password, done) => {
    User.getUserByName(username)
    .then((user) => {
        if (!user) return done(null, false);
        if (password === user.password) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch((err) => { return done(err); });
    
  }));