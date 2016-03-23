var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses info from POST
var methodOverride = require('method-override'); //used to manipulate POST

var criminalsController = require('../controllers/criminals');

// http://12.0.0.1:3000/presidents
router.route('/criminals')

//GET all criminals
  .get(criminalsController.getAll)

//POST criminal
  .post(criminalsController.createCriminal);

router.route('/criminals/:id')
//
//GET one criminal
  .get(criminalsController.getCriminal)
//DELETE one criminal
  .delete(criminalsController.removeCriminal)

//update criminal
  .patch(criminalsController.updateCriminal);


module.exports = router;
