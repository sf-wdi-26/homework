var mongoose = require('mongoose');

var FoodSchema = new mongoose.Schema({
	name: String,
	yumminess: String
});

var Food = mongoose.model('Food', FoodSchema);
module.exports = Food;