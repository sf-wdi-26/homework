var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var quotesController = require('../controllers/quotesController');

// QUOTES API
router.route('/quotes')
  .get(quotesController.getAll)
  .post(quotesController.createQuote);
router.route('/quotes/:id/edit')
  .get(quotesController.getQuote);
router.route('/quotes/:id')
  .put(quotesController.updateQuote)
  .delete(quotesController.removeQuote);

module.exports = router;