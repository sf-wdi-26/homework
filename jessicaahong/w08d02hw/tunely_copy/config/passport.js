var User = require('../models/users');
var GithubStrategy = require('passport-github').Strategy;
var OAuth = require('../secrets.js');

module.exports = function(passport){
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      console.log('deserializing user:',user);
      done(err, user);
    });
  });

  passport.use(new GithubStrategy({
    clientID        : OAuth.gh.clientID,
    clientSecret    : OAuth.gh.clientSecret,
    callbackURL     : 'http://localhost:3000/auth/github/callback',
  }, function(access_token, refresh_token, profile, done) {

    // // Use this to see the information returned from Github

      User.findOne({ 'gh.id' : profile.id }, function(err, user) {
        if (err) return cb(err);
        if (user) {
          return done(null, user);
        } else {

          var newUser = new User();
          newUser.gh.id           = profile.id;
          newUser.gh.access_token = access_token;
          newUser.gh.username    = profile.username;
          newUser.gh.email        = profile.emails[0].value;

          newUser.save(function(err) {
            if (err)
              throw err;

            return done(null, newUser);
          });
        }

      });
  }));

};