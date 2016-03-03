var express = require('express');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var ejs = require('ejs');

// database setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express-views-and-quotes');

// app setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// our routes
var routes = require('./config/routes');
app.use(routes);

app.listen(3000);

console.log('3000 is the magic port');
