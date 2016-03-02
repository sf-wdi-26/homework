var mongoose = require('mongoose');


var FoodSchema = new mongoose.Schema({
	name: String,
	yumminess: String
});

var RestaurantSchema = new mongoose.Schema({
	name: {
		type: String,
	    default: ""
	},
	foods: [FoodSchema],
	ingredients: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Ingredient'
	}]
});

var IngredientSchema = new mongoose.Schema ({
	name: {
		type: String,
		default: ""
	}
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);
var Food = mongoose.model('Food', FoodSchema);
var Ingredient = mongoose.model('Ingredient', IngredientSchema);
module.exports = Food;
module.exports = Restaurant;
module.exports = Ingredient;