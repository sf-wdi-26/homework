var express = require('express');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
var helpers = require('express-helpers');
helpers(app);

// database setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express-views-and-quotes');

// app setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//views
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs'.renderFile));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// our routes
var routes = require('./config/routes');
app.use(routes);

app.listen(port, function(){
	console.log('Server is running on port'+port);
});