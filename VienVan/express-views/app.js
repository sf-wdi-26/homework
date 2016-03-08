var express = require('express');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var hbs = require('hbs');
var method = require('method-override');
// database setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express-views-and-quotes');
//set up view engines
app.set('views', './views');
// app.engine('hbs', require('hbs').renderFile);
app.set('view engine', 'hbs');
// app setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(method('_method'));
app.use(express.static(__dirname + '/public'));

// our routes
var routes = require('./config/routes');
app.use(routes);

app.listen(3000);
