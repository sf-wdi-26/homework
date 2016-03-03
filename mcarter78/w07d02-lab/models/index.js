var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bite-me-mongo-lab');

module.exports.Food = require('./food');
