var express = require('express');
var app = express();

var ejs = require('ejs');
var bodyParser = require('body-parser');
// bodyParser.urlencoded() returns a function that will be called later in the app.post() route
var parseUrlencoded = bodyParser.urlencoded({extended: false});

app.set('views', './views');
app.set('view engine', 'ejs');

// store for cities in memory (as long as server is running)
var cities = [];

app.get('/cities', function(req, res) {
    res.render('cities', {cities: cities});
});

// passing multiple middleware functions to this route; they are executed sequentially.
app.post('/cities', parseUrlencoded, function (request, response) {
  var city;
  var name = request.body.name;
  city = { name: name};
  cities.push(city);
    // passing local variables to be used in EJS template
  response.render('cities', { cities: cities});
  function removeCity() {
  	alert ("hello");//(this.parentNode.firstChild);
  };
  document.getElementById("cool").addEventListener("click",alert("asdf"));
});

app.listen(4000);