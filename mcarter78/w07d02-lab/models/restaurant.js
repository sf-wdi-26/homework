var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var restaurantSchema = new Schema({
  name: String,
  foods: [foodSchema]
});

var Restaurant = mongoose.model('restaurant', restaurantSchema);
module.exports = Restaurant;
