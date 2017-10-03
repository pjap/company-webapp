'use strict';
module.exports = function(sequelize, DataTypes) {
  var UnitKerja = sequelize.define('UnitKerja', {
    namaUnitKerja: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UnitKerja;
};