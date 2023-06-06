const router = require('express').Router()

router
  .get('/products')
  .post('/products')
  .get('/products/:id')
  .put('/products/:id')
  .delete('/carts')

module.exports = router