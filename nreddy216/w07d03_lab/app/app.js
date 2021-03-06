var express = require('express');

//What's morgan?
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();


// database setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express-views-and-quotes');

// app setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

// our routes
var routes = require('./config/routes');
app.use(routes);

//our views

//setting the views path as the root path / views
app.set('views', path.join(__dirname, 'views'));
//setting EJS as the viewing engine and requiring the ejs module ?
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//app is listening in port 3000
app.listen(3000);
