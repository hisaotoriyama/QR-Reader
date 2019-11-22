'use strict';
module.exports = (sequelize, DataTypes) => {
  const storeditem = sequelize.define('storeditem', {
    originaluser: DataTypes.INTEGER,
    document: DataTypes.INTEGER,
    storageplace: DataTypes.INTEGER,
    latestuser: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  storeditem.associate = function(models) {
    // associations can be defined here
    storeditem.belongsTo(models.user,{
      foreignKey:'latestuser',
      onDelete:'CASCADE',
    })
    storeditem.belongsTo(models.user,{
      foreignKey:'originaluser',
      onDelete:'CASCADE',
    })
    storeditem.belongsTo(models.storageloc, {
      foreignKey: 'storageplace',
      onDelete:'CASCADE',
    })
    storeditem.belongsTo(models.content, {
      foreignKey: 'document',
      onDelete:'CASCADE',

    })
  };
  return storeditem;
};