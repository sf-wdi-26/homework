var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var RestaurantSchema = new Schema ({
    name: {
    type: String,
    default: ""
  },
  foods: [FoodSchema];
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;
