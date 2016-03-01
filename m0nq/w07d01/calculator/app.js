// calculator

var express = require('express');
var app = new express();
var router = express.Router();
var port = 3000;

app.use('/', router);

router.route("/add").get(function(req, res){
	var x = req.query.x;
	var y = req.query.y;
	var total = x+y;
	res.send( total );
});

router.route("/multiply").get(function(req, res){
	var x = req.query.x;
	var y = req.query.y;
	var total = x*y;
	res.send( total );
});

app.listen(port, function (error) {
	console.log('running server on port ' + port);
});
