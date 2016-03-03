var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// can i do it like this? w/out using types, 
// and no Schema.Types.ObjectId ??
var FoodSchema = new Schema({
  name: String,
  yuminess: String
  // ingredients: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Ingredient'
  // }]
})

var Food = mongoose.model('Food', FoodSchema);
module.exports = Food;