var express = require('express'),
  app = express();

var burgers = [
  "Hamburger", 
  "Cheese Burger", 
  "Double cheese Burger"
];

var tacos = [
  "Soft Taco",
  "Crunchy Taco",
  "Super Taco",
];

app.param('name', function(request,response,next){
  var name = request.params.name;
  var capitalizeName = name[0].toUpperCase()+name.slice(1).toLowerCase();
  request.params.name = capitalizeName;
  next();
});

app.get("/greet/:name",function (req,res){
  res.send("Hello, " + req.params.name);
});

app.get("/burgers", function(req,res){
  res.send(burgers.join(", "));
});

app.get("/tacos", function(req,res){
  res.send(tacos.join(", "));
});

app.get("/", function(request, response){
  response.send("Hello World");
});

app.get("/thank",function(req,res){
  var name = req.query.name;
  res.send("Thank you, "+ name);});

app.get("/taco/:index", function(req, res){
  var index = req.params.index;
  var selection = taco[index] || "Sorry, that's not a taco option";
  res.send(selection);
});

app.get("/burger/:burger",function(req,res){
  var index = req.params.index;
  var selection = burger[index] || "Sorry, that is not a burger option";
  res.send(selection);
});

app.get("/pick-a-number", function(req,res ){
  var num = req.query.num;
  if (num === correct_number){
    res.send("GOT IT!!");
  } else if (num > correct_number) {
    res.send("go lower >.>");
  } else {
    res.send("go higher ^^^");
  }
});

app.listen(3000, function(){
  console.log("Go to location:3000/");
});