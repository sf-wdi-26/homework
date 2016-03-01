var express = require('express')
  , router = express.Router()

router.use('/food', require('./food'))



module.exports = router