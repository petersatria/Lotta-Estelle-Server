const { Op } = require("sequelize")
const { cloudinary } = require("../config/cloudinaryConfig")
const { User, Product, SizeProduct } = require('../models')

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
      next(err)
    }
  }

  static async createProduct(req, res, next) {
    try {
      const { name, title, description, price, discount, categoryName } = req.body
      const image = await cloudinary.uploader.upload(req.file.path, { quality: 60 })
      const data = await Product.create({
        name, title, description, price, discount: discount || 0, imgUrl: image.secure_url, categoryName
      })

      res.status(201).json({ message: 'Success create product', data })
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

  static async updateProduct(req, res, next) {
    try {
      const { id } = req.params
      const data = await Product.findByPk(id)
      if (!data) throw { name: 'NotFound' }

      const { name, title, description, price, discount, categoryName } = req.body
      const image = await cloudinary.uploader.upload(req.file.path, { quality: 60 })
      await Product.update(
        {
          name: name || '', title: title || '', description: description || '',
          price, discount: discount || 0, imgUrl: image.secure_url,
          categoryName: categoryName || ''
        },
        { where: { id } }
      )
      res.status(200).json({ message: 'Success update data', productId: data.id })
    } catch (err) {
      next(err)
    }
  }
  static async sizeProducts(req, res, next) {
    try {
      const data = await SizeProduct.findAll()
      res.status(200).json({ message: 'Success get data', data })
    } catch (err) {
      next(err)
    }
  }
  static async createAndUpdateSizeProduct(req, res, next) {
    try {
      const { size, stock, ProductId } = req.body

      const data = await SizeProduct.findOne({ where: { [Op.and]: [{ ProductId }, { size }] } })
      if (data) {
        await SizeProduct.update(
          { stock },
          { where: { id: data.id } }
        )
      } else {
        const data = await SizeProduct.create({ size, stock, ProductId })
        return res.status(200).json({ message: 'Success create data', data })
      }
      res.status(200).json({ message: 'Success update data', sizeProductId: data.id, productId: data.ProductId })
    } catch (err) {
      next(err)
    }
  }

  static async deleteSizeProduct(req, res, next) {
    try {
      const { id } = req.params
      const data = await SizeProduct.findByPk(id)
      const product = await SizeProduct.destroy({ where: { id } })
      if (product === 0) throw { name: 'NotFound' }
      res.status(200).json({ message: 'Size product success to delete', data })
    } catch (err) {
      next(err)
    }
  }

  static async updateSizeProduct(req, res, next) {
    try {
      const { id } = req.params
      const data = await SizeProduct.findByPk(id)
      if (!data) throw { name: 'NotFound' }

      const { size, stock } = req.body
      await SizeProduct.update(
        { size, stock },
        { where: { id } }
      )
      res.status(200).json({
        message: 'Success update data', sizeProductId: data.id, productId: data.ProductId
      })
    } catch (err) {
      next(err)
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params
      const data = await Product.findByPk(id)
      const product = await Product.destroy({ where: { id } })
      if (product === 0) throw { name: 'NotFound' }
      res.status(200).json({ message: 'Product success to delete', data })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = AdminController