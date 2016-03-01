var express = require('express');
var app = express();

var ejs = require('ejs');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set('views', './views');
app.set('view engine', 'ejs');

var cities = [];

app.get('/cities', function(request, response) {
  response.render('cities', {cities: cities});
})

app.post('/cities', parseUrlencoded, function(request, response) {
    var city;
    var name = request.body.name;
    var description = request.body.description;
    city = {name: name, description: description};
    cities.push(city);
    response.render('cities', {cities: cities});
})

app.delete('/cities/:id', function (req, res) {
  var id = req.params.id
  cities.splice(id, 1);
  res.redirect('/cities');


});

app.get('/multiply', function(req, res) {
  var x = req.params.x
  var y = req.params.y
  res.send(x*y);
})

app.listen(3000);
