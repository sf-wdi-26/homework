var mongoose = require('mongoose');

var ItemSchema = mongoose.Schema({
  name: String,
  // seller: [UserSchema], //embed this data or reference ?
  price: Number,
  soldStatus: Boolean,
  condition: String,
  categories: [], //ex. furniture, novelty, etc.
  itemZipCode: String, //default location would be the seller's primary location
  dateUpdated: Date,
  dateSold: Date,
  usersInterested: [], //embed IDs of users ?
  numberViews: Number, //how popular is the item?
  imageUrl: String,
  userEmail: String,
  userName: String
});

module.exports = mongoose.model('Item', ItemSchema);
