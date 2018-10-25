'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vendor_details', {
      vendor_id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_name: { type: Sequelize.STRING, allowNull: true },
      email: { type: Sequelize.STRING, allowNull: true },
      phone_number: { type: Sequelize.INTEGER, allowNull: true },
      address: { type: Sequelize.TEXT, allowNull: true },
      user_type: { type: Sequelize.STRING, allowNull: true },
      selected_category: { type: Sequelize.INTEGER, allowNull: true },
      selected_product: { type: Sequelize.INTEGER, allowNull: true },
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
    return queryInterface.dropTable('vendor_details');
  }
};