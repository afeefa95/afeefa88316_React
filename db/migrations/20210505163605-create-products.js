'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pId: {
        type: Sequelize.STRING
      },
      pName: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      isInCart: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: null,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: null,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};