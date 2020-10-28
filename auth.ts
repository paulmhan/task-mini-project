declare var global: any;
import * as passport from 'koa-passport';

import User from './models/auth'

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.getUserById(id).then((user) => { done(null, user); })
        .catch((err) => { done(err, null); });
});

