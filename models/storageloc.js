'use strict';
module.exports = (sequelize, DataTypes) => {
  const storageloc = sequelize.define('storageloc', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  storageloc.associate = function(models) {
    // associations can be defined here
    storageloc.hasMany(models.storeditem, {
      foreignKey: 'storageplace',
      as: 'sl',
    })
    
  };
  return storageloc;
};