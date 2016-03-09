var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var util = require('util');
var session = require('express-session');
var GitHubStrategy = require('passport-github2').Strategy;


var GITHUB_CLIENT_ID = "f3064e3447c38e325be2";
var GITHUB_CLIENT_SECRET = "f6fc3e871190332ab5e5f6d39360cd1c242bc9a1";


passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (obj, done) {
	done(null, obj);
});



passport.use(new GitHubStrategy({
		clientID: GITHUB_CLIENT_ID,
		clientSecret: GITHUB_CLIENT_SECRET,
		callbackURL: "http://127.0.0.1:3000/auth/github/callback"
	},

	function (accessToken, refreshToken, profile, done) {
		User.findOne({
			githubId: profile.id
		}, function (err, user) {
			return done(err, user);
		});
	}
));





var app = express();

// configure Express
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
	res.render('layout', {
		user: req.user
	});
});

app.get('/account', ensureAuthenticated, function (req, res) {
	res.render('account', {
		user: req.user
	});
});

app.get('/login', function (req, res) {
	res.render('login', {
		user: req.user
	});
});

var albumsController = require('../controllers/albumsController');

router.route('/albums')
app.get(albumsController.getAll) //route to all albums (homepage)
app.post(albumsController.createAlbum); //route to post new album

router.route('/albums/new')
app.get(albumsController.newAlbum); //route to form for new album

router.route('/albums/search')
app.get(albumsController.searchAlbum); //route to search for albums

router.route('/albums/:id')
app.get(albumsController.showAlbum) //route to show one album
app.patch(albumsController.updateAlbum) //route to post updated album
app.delete(albumsController.removeAlbum); //route to delete an album

router.route('/albums/:id/edit')
app.get(albumsController.editAlbum); //route to form for editing album
  

module.exports = router;