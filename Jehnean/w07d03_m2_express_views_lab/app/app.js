// require
var express = require('express');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var ejs = require('ejs');

// adding express helpers 
var helpers = require('express-helpers');
helpers(app);

// database setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes_app');

// app setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// views setup 
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').renderFile); 
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// our routes
var routes = require('./config/routes');
app.use(routes);

// server on 3000 
app.listen(3000, function(){
    console.log('Server running on port 3000');
});