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

app.param('name', function(request, response, next){
  var name = request.params.name;
  var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  request.params.name = capitalizedName
  next();
})

app.get("/greet/:name", function (req, res) {
    res.send( "Hello, " + req.params.name );
});

app.get("/multiply"), function (req, res) {
  var num1 = req.query.num1
  var num2 = req.query.num2
  var total = (num1 * num2)
  res.send( total );

}

app.get("/add"), function (req, res) {
  var num1 = req.query.num1
  var num2 = req.query.num2
  var total = (num1 + num2)
  res.send( total );

}

app.get("/pickanumber", function (req, res) {
    var number = req.query.number;
    if (number === 7) {
        res.send("You picked " + number + ". Nailed it!");
    }
    else if (number < 7) {
      res.send("You picked, " + number + ". Too low!")
    }
    else {
      res.send("You picked, " + number + ". Too high!")
    }
});

app.get("/pick-a-color/:color", function (req, res) {
    res.send( "You picked, " + req.params.color );
});

app.get("/thank", function (req, res) {
    var name = req.query.name;
    res.send("Thank you, " + name);
});

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/burgers", function (req, res) {
    //send all the burgers
    res.send(burgers.join(", "));
});

app.get("/burgers/:index", function (req, res) {
    var index = req.params.index;
    var selection = burgers[index] || "Try again";
    res.send(selection);
});

app.get("/tacos", function (req, res) {
    //send all the tacos
    res.send(tacos.join(", "));
});

app.get("/tacos/:index", function (req, res) {
    var index = req.params.index;
    var selection = tacos[index] || "Try again";
    res.send(selection);
});

app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});
