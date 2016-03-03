// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    _ = require("underscore"),
    views = path.join(process.cwd(), "views/");
var db = require('./models');

// CONFIG //
// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
// body parser config to accept all datatypes
app.use(bodyParser.urlencoded({ extended: true }));

//DATA
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

app.get("/foods", function(req, res){

  db.Food.find({}, function(err, foods){
      if (err) {
          console.log("BAD THING!");
          return res.sendStatus(400);
      }
      res.send(foods);
  })

})

app.post("/foods", function (req, res){
  var newFood = req.body;
  db.Food.create(newFood, function(err, foods) {
    if(err) {
      console.log(err);
      return res.sendStatus(400);
    }
    res.send(foods);
  });
});

app.delete("/foods/:id", function (req, res){
  var id = req.params.id
  Food.findById(id, function(err, food) {
    if(err) {
      res.render("/foods")
    } else {
      res.render("/foods")
    }

  })

  // set the value of the id
  // var targetId = parseInt(req.params.id, 10);
  // // find item in the array matching the id
  // var targetItem = _.findWhere(foods, {_id: targetId});
  // // get the index of the found item
  // var index = foods.indexOf(targetItem);
  // // remove the item at that index, only remove 1 item
  // foods.splice(index, 1);
  // // render deleted object
  // res.send(targetItem);
});

app.listen(3000, function (){
  console.log("listening on port 3000");
});