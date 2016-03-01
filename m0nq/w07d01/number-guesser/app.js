// number-guesser

var express = require('express');
var app = new express();
var router = express.Router();
var port = 3000;

app.use('/', router);

var correct_number = 7;

router.route("/pick-a-number/:num", function (req, res) {
	var num = req.params.num;
	if (num === correct_number) {
		res.send("Nailed it!");
	} else if (num > correct_number) {
		res.send("Too High!");
	} else {
		res.send("Too Low");
	}
});

app.listen(port, function (error) {
	console.log('running server on port ' + port);
});
