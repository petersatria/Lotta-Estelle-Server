const CustomerController = require("../controllers/CustomerController")
const authentication = require("../middlewares/authentication")

const router = require('express').Router()

router
  .get('/products', CustomerController.products)
  .get('/products/:id', CustomerController.productById)
  .use(authentication)
  .get('/carts', CustomerController.carts)
  .post('/carts/:ProductId')
  .patch('/transactions/:id')

module.exports = router