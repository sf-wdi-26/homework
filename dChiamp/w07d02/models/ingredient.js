var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var IngredientSchema = new Schema ({
  title: String
})

var Ingredient = mongoose.model("Ingredient", IngredientSchema);
module.exports = Ingredient;


