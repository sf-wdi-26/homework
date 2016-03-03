var express = require('express');
var app = express();

var ejs = require('ejs');
var bodyParser= require('body-parser');
var parseUrlendcoded = bodyParser.urlencoded({extended:false});

app.set('view engine', 'ejs');

var cities = [];

app.get('/',function(req,res){
  res.render('cities', {cities: cities});
});

app.post('/cities', parseUrlendcoded, function(request,response){
  var city;
  var name = request.body.name;
  var description = request.body.description;
  cities.push(city);
  response.render('cities',{cities:cities});
});

app.listen(3000, function(){
  console.log("Go to location:3000/");
});



