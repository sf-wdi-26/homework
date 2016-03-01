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

app.param('name', function(req, res, next){
  var name = req.params.name;
  var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  req.params.name = capitalizedName;
  next();
});

app.get('/greet/:name', function(req, res){
  res.send('hello ' + req.params.name);
});

app.get('/thank', function(req, res){
  var name = req.query.name;
  res.send('thanks, ' + name);
});

app.get('/pick-a-color/:color', function(req, res){
  res.send("You Picked: " + req.params.color);
});

app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/burgers', function(req, res){
  res.send(burgers.join(", "));
});

app.get('/tacos', function(req, res){
  res.send(tacos.join(", "));
});

app.get('/tacos/:index', function(req, res){
  var index = req.params.index;
  var choice = tacos[index] || "Nope";
  res.send(choice);
});

app.get('/burgers/:index', function(req, res){
  var index = req.params.index;
  var choice = burgers[index] || "Nope";
  res.send(choice);
});

app.get('/pickanumber', function (req, res) {
    var number = req.query.number;
    if (number === 7) {
        res.send("You picked " + number + "!");
    }
    else if (number > 7) {
      res.send(number + " is too high!!");
    }
    else {
      res.send(number + " is too low!!");
    }
});

app.get('/multiply', function(req, res) {
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  var product = (num1 * num2);
  res.send(product);
});

app.get('/add', function(req, res) {
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  var sum = num1 + num2;
  res.send(sum);
});

app.listen(3000, function(){
  console.log("Go To http://localhost:3000/");
});
