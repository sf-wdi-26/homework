var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var FoodSchema = new Schema({
	name: String,
	yuminess: String
});

var Food = mongoose.model('Food', FoodSchema);
module.exports = Food;




