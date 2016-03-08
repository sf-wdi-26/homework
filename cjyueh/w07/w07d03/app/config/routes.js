var express = require('express'),
    router = express.Router(), // Router is a method in the Express module
    bodyParser = require('body-parser'), //parses information from POST, allows us to get form data and use it to create, update, delete the data
    methodOverride = require('method-override'); //used to manipulate POST

var quotesController = require('../controllers/quotesController');

// QUOTES API
router.route('/quotes')
  .get(quotesController.getAll)
  .post(quotesController.createQuote);

router.route('/quotes/new')
  .get(quotesController.newQuote);

router.route('/quotes/:id')
  .get(quotesController.getQuote)
  .put(quotesController.updateQuote)
  .delete(quotesController.removeQuote);

module.exports = router;