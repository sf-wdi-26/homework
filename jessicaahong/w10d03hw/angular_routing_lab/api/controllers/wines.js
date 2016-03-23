var Wine = require('../models/wine');

function getAll(req, res) {
	Wine.find(function(err, wines){
		if (err) {
			console.log("error:", err);
			res.json({message: 'could not find wines b/c ' + err});
		} else {
			res.json({wines: wines});
		}
	});
}


function getWine(req, res) {
	var id = req.params.id;

	Wine.find({_id: id}, function(err, wine) {
		if (err) {
			console.log("error:", err);
			res.json({message: 'could not find wine b/c ' + err});
		} else {
			res.json({wine: wine[0]});
		}
	});
}

function createWine(req, res) {
	var wine = new Wine(req.body);

	wine.save(function(err){
		if (err) {
			console.log("error:", err);
			res.json({message: 'could not save wine b/c ' + err});
		} else {
			res.json({wine: wine[0]});
		}
	});
}

function deleteWine(req, res) {
	var id = req.params.id;

	Wine.remove({_id: id}, function (err) {
		if (err) {
			console.log("error:", err);
			res.json({message: 'could not remove wine b/c ' + err});
		} else {
			res.json({message: 'wine successfully deleted'});
		}
	});
}

module.exports = {
	getAll: getAll,
	getWine: getWine,
	createWine: createWine,
	deleteWine: deleteWine
};