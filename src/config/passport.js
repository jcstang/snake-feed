const passport = require('passport');

//alternative way to export modules
module.exports = function passportConfig(app){
    app.use(passport.initialize());
    app.use(passport.session());
    
    //store user in session
    passport.serializeUser((user, done) => {
        done(null, user)
    });

    //retrieve user from session
    passport.deserializeUser((user, done) => {
        //use mongo to find the user or something and then pass that user to done.
        done(null, user);
    });

    //TODO: setup strategies
    require('./strategies/local.strategy');
};