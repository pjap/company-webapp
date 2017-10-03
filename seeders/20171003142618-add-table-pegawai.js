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
    return queryInterface.bulkInsert('Pegawais', [{
      nama_pegawai: 'Chandra Buaya',
      alamat: 'Bekasi',
      jk: 'Pria',
      tgl_lahir: '17 Desember 1992',
      telp: '02188224261',
      status_pegawai: 'Tetap',
      foto: 'candra.jpg',
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
