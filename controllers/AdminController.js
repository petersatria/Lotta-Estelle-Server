const { User } = require('../models')

class AdminController {
  static async register(req, res, next) {
    try {
      const { firstName, lastName, phoneNumber, email, password, address } = req.body
      const data = await User.create({
        firstName, lastName, phoneNumber, email, password, role: 'Admin', address
      })
      res.status(201).json({
        message: 'Success registered admin',
        data: { id: data.id, firstName, lastName, email, role: data.role }
      })
    } catch (err) {
      console.log(err);
      next(err)
    }
  }
}

module.exports = AdminController