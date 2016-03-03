var express = require('express');
var app = express();

var ejs = require('ejs');
var bodyParser = require('body-parser');

var parseUrlencoded = bodyParser.urlencoded({extended: false});

var cities = [];

app.get('/cities', function(req,res) {
  res.render('cities', {cities: cities});
});

app.post('/cities', parseUrlencoded, function (request, response) {
  var city;
  var name = request.body.name;
  var description = request.body.description;
  city = { name: name, description: description}
  cities.push(city);
  // passing local variable to be used in EJS template
  response.render('cities', { cities: cities});
});