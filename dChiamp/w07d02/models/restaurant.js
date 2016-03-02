var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RestaurantSchema = new Schema ({
  name: String,
  dishes: [FoodSchema]
})

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;