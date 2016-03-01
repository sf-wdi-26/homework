var express = require('express'),
  app = express(),
  ejs = require('ejs'),
  bodyParser = require('body-parser');
  // bodyPareser.urlencoded() returns a function that will be called later in the app.post() route
  // parseUrlencoded = bodyParser.urlencoded({extended: false});

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

// store for cities in memory (as long as server is running)
var cities = [];

// GET request to show all the cities
app.get('/cities', function(req, res) {
  // render all the cities
  res.render('cities', {cities: cities});
});

// pass multiple middleware functions to this route (executed sequentially)
app.post('/cities', function(request, response) {
  var city;
  var name = request.body.name;
  var description = request.body.description;
  city = {name: name, description: description};
  cities.push(city);
  // passing local variables to be used in EJS template
  response.render('cities', {cities: cities});
});

// start server
app.listen(3000, function() {
  console.log("Go to localhost:3000/");
});