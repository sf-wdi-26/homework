var express = require('express');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

// database setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quote_app');

// app setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

// our routes
var routes = require('./config/routes');
app.use(routes);

app.listen(3000);
