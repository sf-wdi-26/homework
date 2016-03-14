var Food = require("../models/food");

var foodsController = {
  index: function(req, res) {
    Food.find({}, function(err, foods) {
      // send back a JSON response of all the foods, reverse-ordered
      res.status(200).send(JSON.stringify(foods.reverse()));
    });
  },
  create: function(req, res) {
    var name = req.body.name;
    console.log(name);
    var yuminess = parseInt(req.body.yuminess);
    Food.create({name: name, yuminess: yuminess}, function(err, food) {
      err ?
        // handle error
        res.status(500).send() :
        // handle success
        res.status(201).send(JSON.stringify(food));
    });
  },
  delete: function (req, res) {
    var id = req.params.id;
    Food.remove({_id: id}, function (err, food) {
      if (err) { return console.log(err); }
        console.log(req.params.id  + "was removed");
        res.status(200).send();
    });
  }
};

module.exports = foodsController;
