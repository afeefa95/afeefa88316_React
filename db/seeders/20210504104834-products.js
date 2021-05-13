'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        pId: 'P101',
        pName: 'Coke',
        price: 45.00,
        isInCart: false
      },
      {
        pId: 'P102',
        pName: 'Pepsi',
        price: 30.00,
        isInCart: false
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
