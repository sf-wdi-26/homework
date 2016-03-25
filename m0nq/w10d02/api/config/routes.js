var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var criminalsController = require('../controllers/criminals');

router.route('/criminals')
.get(criminalsController.getAll)
.post(criminalsController.createCriminal);

router.route('/criminals/:id')
.get(criminalsController.getCriminal)
.patch(criminalsController.updateCriminal)
.delete(criminalsController.removeCriminal);

module.exports = router;
