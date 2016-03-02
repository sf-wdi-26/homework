var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ingredientSchema = new Schema({
  name: String,
});

var Ingredient = mongoose.model('ingredient', ingredientSchema);
module.exports = Ingredient;
