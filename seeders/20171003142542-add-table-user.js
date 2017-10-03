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
    */
    return queryInterface.bulkInsert('Users', [{
        username: 'hary',
        password: 'hary',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        username: 'prana',
        password: 'prana',
        role: 'manager',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        username: 'nathan',
        password: 'nathan',
        role: 'hrd',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        username: 'bani',
        password: 'bani',
        role: 'staff',
        createdAt: new Date(),
        updatedAt: new Date()
    }
    ])
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
