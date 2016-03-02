var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bite_me_app");



module.exports.Food = require("./food");
// module.exports.Restaurant = require("./restaurant");
// module.exports.Ingredient = require("./ingredient");
// Need to figure out if we need to require other models
