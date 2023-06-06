const AdminController = require("../controllers/AdminController")

const router = require('express').Router()

router
  .post('/products', AdminController.createProduct)
  .get('/products', AdminController.products)
  .put('/products/size/:id', AdminController.updateSizeProduct)
  .put('/products/:id', AdminController.updateProduct)
  .delete('/products/:id', AdminController.deleteProduct)

module.exports = router