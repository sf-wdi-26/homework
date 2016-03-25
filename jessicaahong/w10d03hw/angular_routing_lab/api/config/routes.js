var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var winesController = require('../controllers/wines');

router.route('/api/wines')
	.get(winesController.getAll)
	.post(winesController.createWine);

router.route('/api/wines/:id')
	.get(winesController.getWine)
	.delete(winesController.deleteWine);

module.exports = router;