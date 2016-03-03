var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bite_me_app");

module.exports.Food = require("./food");

//db.Food.create({ name: "curry", yumminess: "spicy" }, function(err, food){
//	if (err){return console.log(err);}
//	console.log(Food);
//})
//
//db.Food.find({}, function(err, foods){
//	if(err){return console.log("YO YOUR CODE IS JACKED!!!");}
//	console.log(foods)
//});