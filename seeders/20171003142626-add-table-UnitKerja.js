'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */return queryInterface.bulkInsert('UnitKerjas', [{
        namaUnitKerja: 'IT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaUnitKerja: 'Accounting',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaUnitKerja: 'HRD',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaUnitKerja: 'Marketing',
        createdAt: new Date(),
        updatedAt: new Date()
    }]
  )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
