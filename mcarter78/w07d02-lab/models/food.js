var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var foodSchema = new Schema({
  name: String,
  yumminess: String,
  ingredients: [{
    type: Schema.Types.ObjectId,
    ref: 'Ingredient'
  }]
});

var Food = mongoose.model('food', foodSchema);
module.exports = Food;
