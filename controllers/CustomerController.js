const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User, Product, SizeProduct, Transaction, TransactionProduct } = require('../models')

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

  static async products(req, res, next) {
    try {
      const data = await Product.findAll({
        include: [{
          model: SizeProduct,
          attributes: { exclude: ['createdAt', 'updatedAt'] }
        }],
        order: [['updatedAt', 'DESC']]
      })
      res.status(200).json({ message: 'Success get data', data })
    } catch (err) {
      next(err)
    }
  }

  static async productById(req, res, next) {
    try {
      const { id } = req.params

      const data = await Product.findByPk(id, {
        include: [{
          model: SizeProduct,
          attributes: { exclude: ['createdAt', 'updatedAt'] }
        }]
      })
      res.status(200).json({ message: 'Success get data', data })
    } catch (err) {
      next(err)
    }
  }

  // static async carts(req, res, next) {
  //   try {
  //     const { id } = req.user
  //     const data = await Transaction.findAll({
  //       where: { UserId: id }
  //     })
  //     res.status(200).json({ message: 'Success get data', data })
  //   } catch (err) {
  //     next(err)
  //   }
  // }
  static async carts(req, res, next) {
    try {
      const { id } = req.user
      const data = await TransactionProduct.findAll({
        include: [{
          model: Transaction,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          where: { UserId: id },
        }, {
          model: Product,
          attributes: { exclude: ['createdAt', 'updatedAt'] }
        }
        ],
        // include: [{
        //   model: Product,
        //   attributes: { exclude: ['createdAt', 'updatedAt'] }
        // }]
      })
      res.status(200).json({ message: 'Success get data', data })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CustomerController