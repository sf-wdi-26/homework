var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var IngredientSchema = new Schema ({
	name: String,
	origin: String
});

var Ingredient = mongoose.model("Ingredient", IngredientSchema);
module.exports = Ingredient; 