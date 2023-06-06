const router = require('express').Router()

router
  .get('/products')
  .post('/products')
  .put('/products/:id')
  .delete('/products/:id')

module.exports = router