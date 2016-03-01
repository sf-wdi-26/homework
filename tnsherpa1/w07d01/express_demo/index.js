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

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/burgers", function (req, res) {
    //send all the burgers     
    res.send(burgers.join(", "));
});

app.get("/burgers/:id", function (req, res) {
    var id = req.params.id;
    res.send(burgers[id]);
});

app.get("/tacos/:id", function (req, res) {
    var id = req.params.id;
    res.send(tacos[id]);
});

app.get("/tacos", function (req, res) {
    //send all the tacos           
    res.send(tacos.join(", "));
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
})

app.get("/greet/:name", function (req, res) {
    res.send( "Hello, " + req.params.name );
});

app.get("/thank", function (req, res) {
    var name = req.query.name;
    res.send("Thank you, " + name);
});

app.get("/pickanumber", function (req, res) {
    var answer = 14;
    var number = req.query.number;
    if (number == answer) {
        res.send("You picked the correct " + number + "!");
    } else if(number > answer) {
        res.send("You guessed too high");
    } else if(number < answer) {
      res.send("You guessed too low");
    }

});

app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});