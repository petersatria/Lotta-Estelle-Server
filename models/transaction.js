'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.User)
      Transaction.belongsToMany(models.Product, { through: models.TransactionProduct })
      Transaction.hasMany(models.TransactionProduct)
    }
  }
  Transaction.init({
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: { msg: 'Date is required' },
        notEmpty: { msg: 'Date is required' }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Status is required' },
        notEmpty: { msg: 'Status is required' }
      }
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Total price is required' },
        notEmpty: { msg: 'Total price is required' }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'User id is required' },
        notEmpty: { msg: 'User id is required' }
      }
    },
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};