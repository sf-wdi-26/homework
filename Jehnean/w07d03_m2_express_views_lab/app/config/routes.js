// require
var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

// putting all the methods into this var 
// requires code from quotesController
var quotesController = require('../controllers/quotesController');

// QUOTES API
router.route('/quotes')
  // controller route I want to run and the method I want to call 
  .get(quotesController.getAll)
  .post(quotesController.createQuote);

router.route('/quotes/:id')
  .get(quotesController.getQuote)
  .put(quotesController.updateQuote)
  .delete(quotesController.removeQuote);

module.exports = router;