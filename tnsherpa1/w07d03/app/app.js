var express = require('express');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
//express helpers npm install express-helpers to install 
var helpers = require('express-helpers');
helpers(app);
// database setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000/quotes-app');

// app setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//setup views here
app.set('views', path.join(__dirname,'views'));
app.engine('ejs', require('ejs').renderfile);
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));

// our routes
var routes = require('./config/routes');
app.use(routes);

var port = 3000;
app.listen(port, function(){
	console.log("goto http://localhost:3000");
});