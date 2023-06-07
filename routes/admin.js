const AdminController = require("../controllers/AdminController")
const upload = require("../middlewares/multer")

const router = require('express').Router()

router
  .post('/products', upload.single('image'), AdminController.createProduct)
  .get('/products', AdminController.products)
  .put('/products/size/:id', AdminController.updateSizeProduct)
  .put('/products/:id', AdminController.updateProduct)
  .delete('/products/:id', AdminController.deleteProduct)

module.exports = router