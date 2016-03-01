var express = require('express');
var app = express();

var ejs = require('ejs');
var bodyParser = require('body-parser');
// bodyParser.urlencoded() returns a function that will be called later in the app.post() route
var parseUrlencoded = bodyParser.urlencoded({extended: false});

// store for cities in memory (as long as server is running)
var cities = [];

// setup views
app.set('views', './views');
app.set('view engine', 'ejs');

// get cities 
app.get('/cities', function(req, res, next){
  res.render('cities', {cities: cities });
  // res.json(candies); 
});

// add a city 
app.post('/cities', parseUrlencoded, function(request, response) {
  var city,
      name = request.body.name, 
      description = request.body.description;
  city = {name: name, description: description};
  cities.push(city);
  response.render('cities', {cities: cities});
});

// delete a city


// start the server
app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});
