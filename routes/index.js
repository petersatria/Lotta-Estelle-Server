const router = require('express').Router()

router
  .use('/api', require('./customer'))
  .use('/', require('./admin'))

module.exports = router