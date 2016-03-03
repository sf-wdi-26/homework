var mongoose = require("mongoose");

var RestaurantSchema = new Schema({
  body: {
    type: String,
    default: ""
  },

foods: [FoodSchema]
});


var Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;