var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //the _ node module used to manipulate POST

var quotesController = require('../controllers/quotesController');
// Links to module.exports - same as saying:
	// getAll: getAll, 
  // createQuote: createQuote,
  // getQuote: getQuote,
  // updateQuote: updateQuote,
  // removeQuote: removeQuote

// QUOTES API   router = express.Router()
router.route('/quotes') // all things ending in /quotes
  .get(quotesController.getAll)  // getAll method
  .post(quotesController.createQuote); // createQuote method

router.route('/quotes/:id') 
  .get(quotesController.getQuote)
  .put(quotesController.updateQuote)
  .delete(quotesController.removeQuote);

module.exports = router;