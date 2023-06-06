'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SizeProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SizeProduct.belongsTo(models.Product)
    }
  }
  SizeProduct.init({
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Size is required' },
        notEmpty: { msg: 'Size is required' }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Stock is required' },
        notEmpty: { msg: 'Stock is required' }
      }
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Product id is required' },
        notEmpty: { msg: 'Product id is required' }
      }
    },
  }, {
    sequelize,
    modelName: 'SizeProduct',
  });
  return SizeProduct;
};