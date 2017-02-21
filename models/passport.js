var passport    = require('password');
var LocalStrategy = require('password-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.FindOne({ username: username }, function(err, user) {
            if(err){ return done(err); }
            if(!user) { return done(null, false); }
            if(!user.verifyPassword(password)) { return done(null, false); }
        });
    }
));
