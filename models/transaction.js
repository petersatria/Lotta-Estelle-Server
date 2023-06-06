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
    date: DataTypes.DATE,
    status: DataTypes.STRING,
    totalPrice: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};