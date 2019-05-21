//TODO: setup up local strategy
const passport = require('passport');
const {
  Strategy
} = require('passport-local');

module.exports = function localStrategy() {
  passport.use(new Strategy({
    usernameField: 'username',
    passwordField: 'password'
  }, (username, password, done) => {
    //check the users creds here

    //new user created whenever you just enter something
    const user = {
      username,
      password
    }
    done(null, user);
  }));
};