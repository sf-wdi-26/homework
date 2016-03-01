//requirements

var express = require('express'),
  app = express();


//EJS
var ejs = require('ejs');
var bodyParser = require('body-parser');
// bodyParser.urlencoded() returns a function that will be called later in the app.post() route
// var parseUrlencoded = bodyParser.urlencoded({extended: false});

//allows us to use bodyParser throughout all the forms
//not sure what extended false means
app.use(bodyParser.urlencoded({extended: false}));

//have to do this in order for views to be set
app.set('views', './views');
app.set('view engine', 'ejs');

//method override for delete
var methodOverride = require('method-override');
app.use(methodOverride('_method'));


//store for cities in memory (as long as server is running)
var cities = [];

app.get('/cities', function(req, res){
  res.render('cities', {cities: cities});
});

//passing multiple middleware functions to this route, they are executed sequentially
app.post('/cities', function(request, response){
  var city;
  var name = request.body.name;
  var description = request.body.description;
  city = { name: name, description: description}
  cities.push(city);
  //needs to send back the response
  response.render('cities', {cities: cities});
});

//need to have method override for this - install it
app.delete('/cities/:id', function(req, res){
  var id = req.params.id;
  cities.splice(id, 1);
  res.redirect('/cities');
});



//start the server
app.listen(4000, function(){
  console.log("Go to localhost:4000/");
});
