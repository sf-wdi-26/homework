// color picker

var express = require('express');
var app = new express();
var router = express.Router();
var port = 3000;

app.use('/', router);

router.route("/color/:choice").all(function (req, res) {
  var choice = req.params.choice;
  res.send("Your color is: " + choice);
});

app.listen(port, function (error) {
  console.log('running server on port ' + port);
});
