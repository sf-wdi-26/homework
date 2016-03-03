var express = require('express'),
  app = express();

var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
                ];

var tacos = [
                "Soft Taco", 
                "Cruncy Taco",
                "Super Taco"
                ];

app.get("/", function (req, res) {
    res.send("Hello, world!");
});

app.get("/burgers", function (req, res) {
  //send all the burgers
  res.send(burgers.join(", "));
});

app.get("/tacos", function (req, res) {
  //send all the tacos
  res.send(tacos.join(", "));
});

app.param('name', function(request, response, next) {
  // get name from params
  var name = request.params.name;
  // capitalize the name
  var capitalizeName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  // set the value ofthe name to the capitalized version
  request.params.name = capitalizeName;
  // pass control to the next middleware function
  next();
});

app.get("/greet/:name", function (req, res) {
  res.send("Hello, " + req.params.name );
});

app.get("/thank", function (req, res) {
    var name = req.query.name;
    res.send("Thank you, " + name);
  });


app.listen(3000, function() {
    console.log("Go to localhost:3000/");
});

