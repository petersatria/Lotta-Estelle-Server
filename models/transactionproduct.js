'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TransactionProduct.belongsTo(models.Transaction)
      TransactionProduct.belongsTo(models.Product)
    }
  }
  TransactionProduct.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    size: DataTypes.STRING,
    qty: DataTypes.STRING,
    ProductId: DataTypes.INTEGER,
    TransactionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TransactionProduct',
  });
  return TransactionProduct;
};