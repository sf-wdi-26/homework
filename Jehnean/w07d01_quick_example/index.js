// requirements
var express = require('express'),
    app = express();

// a "GET" request to "/" will run the function below
app.get("/", function (req, res) {
    // send back the response: 'Hello World'
    res.send("Hello World");
});

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

app.get("/burgers", function(req, res){
  //send all the burgers
  res.send(tacos.join(", "));
});

app.get("/tacos", function(){
  // send all tacos
  res.send(tacos.join(", "));
});

// Write a route with to allow you to access a taco by it's index in the array, such that one could go to the route: "/taco/2" and get back a server response with the text "Super Taco".

app.get("/taco/:index", function(req, res){
  // get taco's index
  var index = req.params.index; 
  // Is that a valid taco index?
  var access = tacos[index] || "Not a taco."; 
  // go to that taco
  res.send(access);  
});

// Write a route with to allow you to access a burger by it's index in the array, similar to above.
app.get("/burger/:index", function(req, res){
  var index = req.params.index;
  var access = burgers[index] || "Not a burger."; 
  res.send(access);  
});

// The Number Guessing Game
var correctNumber = 7; 

app.get("/pickanumber", function (req, res) {
    var number = req.query.number;
    // Move seven out and swap with correctNumber var
    if (number === correctNumber) {
        res.send("Nailed it!");
    } else if (number > correctNumber) {
      res.send("Too high!");
    } else {
      res.send("Too low.");
    }
});

// What if we want to create an app that can dynamically say hello to anyone?
// calls this on every route with the param 'name'
app.param('name', function(request, response, next){
  // get name from params
  var name = request.params.name;
  // capitalize the name
  var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase(); 
  // set the value of the name to the capitalized version
  request.params.name = capitalizedName;
  // pass the control to the next middleware function
  next();
});

app.get("/greet/:name", function(req, res){
  // Says hello to name
  res.send("Hello, " + req.params.name );
});

// Let's add our first route to practice query params.
app.get("/thank", function (req, res) {
    var name = req.query.name;
    res.send("Thank you, " + name);
});

// pick a color 
app.get("/color/:choice", function(req, res){
  var choice = req.params.choice; 
  res.send("Your color is: " + choice);
});

// start the server
app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});

