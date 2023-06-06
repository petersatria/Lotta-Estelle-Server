const AdminController = require("../controllers/AdminController")
const CustomerController = require("../controllers/CustomerController")
const authentication = require("../middlewares/authentication")
const errorHandler = require("../middlewares/errorHandler")

const router = require('express').Router()

router
  .post('/admin/register', AdminController.register)
  .post('/api/register', CustomerController.register)
  .post('/api/login', CustomerController.login)
  .use('/api', require('./customer'))
  .use(authentication)
  .use('/admin', require('./admin'))
  .use(errorHandler)

module.exports = router