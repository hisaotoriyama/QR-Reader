'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('storeditems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      originaluser: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      document: {
        type: Sequelize.INTEGER,
        references: {
          model: 'contents',
          key: 'id'
        }
      },
        storageplace: {
          type: Sequelize.INTEGER,
          references: {
            model: 'storagelocs',
            key: 'id'
          }
      },
      latestuser: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id'
          }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('storeditems');
  }
};