var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var quotesController = require('../controllers/quotesController');

// QUOTES API
router.route('/quotes')
  .get(quotesController.getAll);
router.route('/quotes/new')
  .post(quotesController.createQuote);
router.route('/quotes/:id')
  .get(quotesController.getQuote)
  .put(quotesController.updateQuote)
  .delete(quotesController.removeQuote);
 router.route('/quotes/:id/edit')
 	.get(quotesController.getQuote);

module.exports = router;