var db = require('./module');
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bite_me_app");

module.exports.Food = require("./food");

// app.get("/allthefoods", function(req, res){

//     db.Food.find({}, function(err, foods){
//         if (err) {
//             console.log("BAD THING!");
//             return res.sendStatus(400);
//         }
//         res.send(foods);
//     });

// });

