var express = require('express')
  , router = express.Router()

router.use('/', require('./exercises'))



module.exports = router