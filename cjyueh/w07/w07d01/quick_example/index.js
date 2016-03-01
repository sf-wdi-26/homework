// requirements
var express = require('express'),
  app = express();

// making our array objects
var burgers = [
  "Hamburger",
  "Cheese Burger",
  "Dble Cheese Burger"
];

var tacos = [
  "Soft Taco",
  "Crunchy Taco",
  "Super Taco"
];

// middleware for param 'name'
app.param('name', function(request, response, next) {
  // get name from params
  var name = request.params.name;
  // capitalize the name
  var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  // set the value of the name to capitalized version
  request.params.name = capitalizedName;
  // pass control to the next middleware function
  next();
});

// GET request to show the greeting for a specific name
app.get("/greet/:name", function(req, res) {
  // send back a response
  res.send("Hello, " + req.params.name);
});

// GET request to '/thank'
app.get("/thank", function(req, res) {
  var name = req.query.name;
  res.send("Thank you, " + name);
});

// GET request to '/pickanumber' with query parameters
var correctNumber = 10;
app.get("/pickanumber", function(req, res) {
  var number = req.query.number;
  if (number > correctNumber) {
    res.send("Too high!");
  } else if (number < correctNumber) {
    res.send("Too low!");
  } else {
    res.send("Nailed it!");
  }
});

// GET request to '/multiply' with query parameters
app.get("/multiply", function(req, res) {
  var x = req.query.x;
  var y = req.query.y;
  var product = (x * y);
  res.send(product + " is the product.");
});

// GET request to '/add' with query parameters
app.get("/add", function(req, res) {
  var x = parseInt(req.query.x);
  // console.log(typeof(x));
  var y = parseInt(req.query.y);
  var sum = (x + y);
  res.send(sum + " is the sum.");
});

// GET request to 'pick-a-color'
app.get("/pick-a-color/:color", function(req, res) {
  // send back a response
  res.send("You picked: " + req.params.color);
});

// GET request to '/'
app.get("/", function(req, res) {
  // send back a response
  res.send("Hello World");
});

// GET request to show all the burgers
app.get("/burgers", function(req, res) {
  // send all the burgers
  res.send(burgers.join(", "));
});

// GET request for a burger
app.get('/burgers/:index', function(req, res) {
  // get index value from params
  var index = req.params.index;
  // set burger as an item from burgers array with index of (index-1)
  var burger = burgers[index - 1];
  // send the burger
  res.send(burger);
});

// GET request to show all the tacos
app.get('/tacos', function(reg, res) {
  //send all the tacos
  res.send(tacos.join(", "));
});

// GET request for a taco
app.get('/tacos/:index', function(req, res) {
  // get index value from params
  var index = req.params.index;
  // set taco as an item from tacos array with index of (index-1)
  var taco = tacos[index - 1];
  // send the taco
  res.send(taco);
});

// start server
app.listen(3000, function() {
  console.log("Go to localhost:3000/");
});