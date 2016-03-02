var mongoose = require('mongoose');
var conn = mongoose.createConnection('mongodb://localhost/bite-me-mongo-lab');
var db = require("../models");

var foods_list = [
  {name: "Sushiritto", yumminess: "quite"},
  {name: "Green Eggs & Ham", yumminess: "sure"},
  {name: "Crayfish", yumminess: "depending"},
  {name: "Foie Gras", yumminess: "omg"},
  {name: "Kale", yumminess: "meh"}
];

db.Food.remove({}, function(err, foods){

  db.Food.create(foods_list, function(err, foods){
    if (err) { return console.log(err); }
    console.log("created", foods.length, "foods");
    mongoose.connection.close();
  });
});
