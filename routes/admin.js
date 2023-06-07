const AdminController = require("../controllers/AdminController")
const upload = require("../middlewares/multer")

const router = require('express').Router()

router
  .post('/products', upload.single('image'), AdminController.createProduct)
  .get('/products', AdminController.products)
  .get('/products/size', AdminController.sizeProducts)
  .post('/products/size', AdminController.createAndUpdateSizeProduct)
  .delete('/products/size/:id', AdminController.deleteSizeProduct)
  .put('/products/size/:id', AdminController.updateSizeProduct)
  .put('/products/:id', upload.single('image'), AdminController.updateProduct)
  .delete('/products/:id', AdminController.deleteProduct)

module.exports = router