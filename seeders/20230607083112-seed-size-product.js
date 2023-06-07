'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = require('../data/sizeProduct.json')
    data.forEach(e => {
      e.createdAt = e.updatedAt = new Date()
    });
    await queryInterface.bulkInsert('SizeProducts', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SizeProducts')
  }
};
