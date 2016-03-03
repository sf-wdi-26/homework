// REQUIREMENTS //
var db = require('./models');
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    _ = require("underscore"),
    views = path.join(process.cwd(), "views/");

// var db = require('./models')

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
  // render foods index as JSON
  db.Food.find({}, function(err,data){
    err ? res.sendStatus(err) : res.send(data)
  })
  // res.send(data);
});

// app.get("/foods", function(req,res) {
//   db.Food.find({}, function(err,foods) {
//     err ? res.sendStatus(400) : res.send(foods);
//   })
// })

app.post("/foods", function (req, res){
  // var name = newFood.name
  // var yumminess = newFood.yumminess
  // add a unique id
  // newFood._id = foods[foods.length - 1]._id + 1;
  // res.send(newFood);
  // add new food to DB (array, really...)
  // foods.push(newFood);
  // send a response with newly created object
  var newFood = req.body;
  // db.Food.create({name: name, yumminess: yumminess}, function(err, data) {
  db.Food.create(newFood, function(err, data) {
    err ? res.redirect('/foods') : res.send({data}) 
  });
});



app.delete("/foods/:id", function (req, res){
  var id = req.body.id;
  db.Food.find({_id: id}).remove(function(err, data) {
      err ? res.redirect('/') : res.redirect('/foods')
   })
})


  // // set the value of the id
  // var targetId = parseInt(req.params.id, 10);
  // // find item in the array matching the id
  // var targetItem = _.findWhere(foods, {_id: targetId});
  // // get the index of the found item
  // var index = foods.indexOf(targetItem);
  // // remove the item at that index, only remove 1 item
  // foods.splice(index, 1);
  // // render deleted object
  // res.send(targetItem);
// });

// app.listen(3000, function (){
//   console.log("listening on port 3000");
// });
