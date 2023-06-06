const router = require('express').Router()

router
  .get('/products')
  .get('/products/:id')
  .get('/carts')
  .post('/carts/:ProductId')
  .patch('/transactions/:id')

module.exports = router