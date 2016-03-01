var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');

var parseUrlencoded = bodyParser.urlencoded({extended: false});
 

var cities = [];

app.get('/cities', function(req,res){
	res.render('cities', cities: cities)
)};

app.post('/cities', parseUrlencoded, function(req,res){
	var city;
	var name = request.body.name
	var description = request.body.description;
	city = { name: name, description: description}
	cities.push(city);
	res.render('cities', { cities: cities});
});



