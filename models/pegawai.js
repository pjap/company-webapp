'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pegawai = sequelize.define('Pegawai', {
    nama_pegawai: DataTypes.STRING,
    alamat: DataTypes.STRING,
    jk: DataTypes.STRING,
    tgl_lahir: DataTypes.STRING,
    telp: DataTypes.STRING,
    status_pegawai: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Pegawai;
};