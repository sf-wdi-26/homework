// dependencies
var express = require('express');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// database setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quotes_app');

// app setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

// our routes
var routes = require('./config/routes');
app.use(routes);

app.listen(3000);