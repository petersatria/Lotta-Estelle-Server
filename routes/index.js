const AdminController = require("../controllers/AdminController")
const errorHandler = require("../middlewares/errorHandler")

const router = require('express').Router()

router
  .post('/admin/register', AdminController.register)
  // .post('/api/register', Customer.register)
  .use('/api', require('./customer'))
  .use('/', require('./admin'))
  .use(errorHandler)

module.exports = router