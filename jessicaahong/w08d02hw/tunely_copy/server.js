// SERVER-SIDE JAVASCRIPT
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');
var passport       = require('passport');
var expressSession = require('express-session');
var cookieParser   = require("cookie-parser");
var mongoose = require('mongoose');

var routes = require('./config/routes');
var User = require('./models/users');

// serve static files from public folder

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(logger('dev'));

//authentication middleware
app.use( cookieParser() );
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
// Setting up the Passport Strategies
require("./config/passport")(passport);

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'hbs');

var hbs = require('hbs');
var hbsutils = require('hbs-utils')(hbs);
hbs.registerPartials(__dirname + '/views/partials');
hbsutils.registerWatchedPartials(__dirname + '/views/partials');


//login stuff
app.get('/users/login', function (req,res){
	res.render('./partials/login',{user: req.user});
});

//route to create request to github
app.get('/auth/github', passport.authenticate('github'));


app.get('/auth/github/callback',
	passport.authenticate('github', {
		failureRedirect: '/users/login', 
		successRedirect: '/users/profile'
	})
);

//logout route
app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});

//route to profile page
app.get('/users/profile', function (req, res) {
	res.render('./partials/profile',{user: req.user});
});


/**********
 * SERVER *
 **********/
app.use(routes);
// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
