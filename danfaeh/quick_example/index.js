
var express = require('express'),
    app = express();

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

var correct_number = 7;

app.get("/pick-a-number/:num", function(req, res){
  var num = req.params.num;
  if (num === correct_number){
    res.send("Nailed it!");
  } else if (num > correct_number){
    res.send("Too High!");
  } else {
    res.send("Too Low");
  }
});

app.get("/taco/:index", function(req, res){
  var index = req.params.index;
  var selection = tacos[index] || "Sorry, that's not a taco option";
  res.send( selection );
});

app.get("/burger/:index", function(req, res){
  var index = req.params.index;
  var selection = burgers[index] || "Sorry, that's not a burger option";
  res.send( selection );
});
// another example of some simple middleware
// call this function on every route with the param of 'name'
app.param('name', function(request, response, next) {
    // get name from params
  var name = request.params.name;
    // capitalize the name
  var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    // set the value of the name to the capitalized version
  request.params.name = capitalizedName;
    // pass control to the next middleware function
  next();
});

app.get("/color/:choice", function(req, res){
  var choice = req.params.choice;
  res.send("Your color is: " + choice);
});


app.get("/thank", function (req, res) {
    var name = req.query.name;
    res.send("Thank you, " + name);
});


app.get("/greet/:name", function (req, res) {
    res.send( "Hello, " + req.params.name );
});

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/burgers", function (req, res) {
    //send all the burgers     
    res.send(burgers.join(", "));
});

app.get("/tacos", function (req, res) {
    //send all the tacos           
    res.send(tacos.join(", "));
});

app.get("/add", function(req, res){
  var x = req.query.x;
  var y = req.query.y;
  var total = x+y;
  res.send( total );
});

app.get("/multiply", function(req, res){
  var x = req.query.x;
  var y = req.query.y;
  var total = x*y;
  res.send( total );
});

app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});


