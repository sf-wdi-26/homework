// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    _ = require("underscore"),
    views = path.join(process.cwd(), "views/");
    db = require('./models');

// CONFIG //
// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
// body parser config to accept all datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// DATA //
// var foods =[
//   {_id: 0, name: "Sushiritto", yumminess: "quite"},
//   {_id: 1, name: "Green Eggs & Ham", yumminess: "sure"},
//   {_id: 2, name: "Crayfish", yumminess: "depending"},
//   {_id: 3, name: "Foie Gras", yumminess: "omg"},
//   {_id: 4, name: "Kale", yumminess: "meh"}
// ];

// ROUTES //
app.get("/", function (req, res){
  // render index.html
  res.sendFile(path.join(views + 'index.html'));
});

// foods index path
app.get("/foods", function (req, res){
  db.Food.find({}, function(err, foods_list) {
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
    res.send(foods_list);
  });
});

app.post("/foods", function (req, res){
  var newFoodName = req.body.name;
  var newFoodYums = req.body.yumminess;
  db.Food.create({name: newFoodName, yumminess: newFoodYums}, function(err, food){
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    } else {
    res.redirect("/foods");
    }
  });
});

app.delete("/foods/:id", function (req, res){
  var id = req.params.id;
  db.Food.remove({_id: id}, function (err, foods) {
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    } else {
    res.send(foods);
    }
  });
});

app.listen(3000, function (){
  console.log("listening on port 3000");
});
