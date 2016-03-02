// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    _ = require("underscore"),
    views = path.join(process.cwd(), "views/");

// CONFIG //
// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
// body parser config to accept all datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// DATA //

var db = require('./models');


// ROUTES //
app.get("/", function (req, res){
  // render index.html
  res.sendFile(path.join(views + 'index.html'));

});

// foods index path
app.get("/foods", function index(req, res){
  db.Food.find({}, function(err, foods_list){
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
    res.send(foods_list);
  });
});

app.post("/foods", function create(req, res){
  var newFood = req.body;
  db.Food.create(newFood, function(err, food){
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
    res.send(food);
  })
});

app.delete("/foods/:id", function (req, res){
  var id = req.params.id
  db.Food.remove({_id:id}, function(food, err){
     res.sendFile(path.join(views + 'index.html'));
  })


  // set the value of the id
  // var targetId = parseInt(req.params.id, 10);
  // find item in the array matching the id
  // var targetItem = _.findWhere(foods, {_id: targetId});
  // get the index of the found item
  // var index = foods.indexOf(targetItem);
  // remove the item at that index, only remove 1 item
  // foods.splice(index, 1);
  // render deleted object
  // res.send(targetItem);
});



app.listen(3000, function (){
  console.log("listening on port 3000");
});
