const CustomerController = require("../controllers/CustomerController")
const authentication = require("../middlewares/authentication")

const router = require('express').Router()

router
  .get('/products', CustomerController.products)
  .get('/products/:id', CustomerController.productById)
  .use(authentication)
  .post('/transactions', CustomerController.checkout)
  .post('/generate-midtrans-token', CustomerController.generateMidtransToken)
  // .post('/carts/:ProductId')
  .patch('/transactions/:id', CustomerController.paid)

module.exports = router