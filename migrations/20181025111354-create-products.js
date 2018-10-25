'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      product_id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_name: { type: Sequelize.STRING, allowNull: true },
      price: { type: Sequelize.FLOAT, allowNull: true },
      unit: { type: Sequelize.INTEGER, allowNull: true },
      belongs_to_category: { type: Sequelize.INTEGER, allowNull: true },
      belongs_to_vendor: { type: Sequelize.INTEGER, allowNull: true },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};