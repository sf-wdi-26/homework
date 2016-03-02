var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bit_me_app");

module.exports.Food = require("./food");
