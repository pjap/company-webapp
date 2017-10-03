'use strict';
module.exports = function(sequelize, DataTypes) {
  var Jabatan = sequelize.define('Jabatan', {
    namaJabatan: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Jabatan;
};