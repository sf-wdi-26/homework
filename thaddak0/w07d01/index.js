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

app.get("/", function(req, res){
  res.send("Hello World");
});



app.get("/color/:choice", function(req, res){
  var choice = req.params.choice;
  res.send("your color is: " + choice);
});

app.get("/burgers", function(req, res){
  res.send(burgers.join(", "));
});

app.get("/tacos", function(req, res){
  res.send(tacos.join(", "));
});


app.get("/burgers/:id", function(req, res){
  res.send(burgers[req.params.id-1]);
});

app.get("/tacos/:id", function(req, res){
  res.send(tacos[req.params.id-1]);
});


var correct_number = 7;

app.get("/pick-a-number/:num", function(req, res){
  var num = req.params.num;
  if (num === correct_number){
    res.send("nailed it!");
  } else if (num > correct_number){
    res.send("too high!")
  } else {
    res.send("too low")
  }
});

app.listen(3000, function(){
  console.log("Go to localhost:3000/");
});
