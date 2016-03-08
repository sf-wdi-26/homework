var express = require('express');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var helpers = require('express-helpers')(app);
var methodOverride = require('method-override');

// database setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quote_app');
//used to have localhost:27107

// app setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Set up our app to accept to use EJS
app.set('views', path.join(__dirname, 'views'));
// tell app.enguine to render a file
app.engine('ejs', require('ejs').renderFile);
// tell it that its engine is ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// our routes
var routes = require('./config/routes');
app.use(routes);

app.listen(3000, function () {
	console.log("Connected to server at port 3000");
});