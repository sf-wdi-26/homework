var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var criminalsController = require('./controllers/criminals');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/infamous-masterminds');

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

////////// ROUTES //////////
//GET all criminals
app.get('/criminals', criminalsController.getAll);

//POST a new blob
app.post('/criminals', criminalsController.createCriminal);

// GET return specific candy
app.get('criminals/:id', criminalsController.getCriminal);

// PATCH update existing candy
app.patch('criminals/:id', criminalsController.updateCriminal);

// DELETE remove specific candy from DB
app.delete('criminals/:id', criminalsController.removeCriminal);

app.listen(3000, function(){
	console.log("listening at 3000");
});