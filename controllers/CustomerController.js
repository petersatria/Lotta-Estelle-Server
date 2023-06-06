const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User } = require('../models')

class CustomerController {
  static async register(req, res, next) {
    try {
      const { firstName, lastName, phoneNumber, email, password, address } = req.body
      const data = await User.create({
        firstName, lastName, phoneNumber, email, password, role: 'Customer', address
      })
      res.status(201).json({
        message: 'Success registered user',
        data: { id: data.id, firstName, lastName, email, role: data.role }
      })
    } catch (err) {
      next(err)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      if (!email || !password) throw { name: 'EmailPasswordEmpty' }

      const data = await User.findOne({ where: { email } })
      if (!data) throw { name: 'EmailPasswordInvalid' }

      const isValidPassword = comparePassword(password, data.password)
      if (!isValidPassword) throw { name: 'EmailPasswordInvalid' }

      const access_token = signToken({ id: data.id })
      res.status(200).json({
        message: 'Success to login', access_token, id: data.id,
        role: data.role
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CustomerController