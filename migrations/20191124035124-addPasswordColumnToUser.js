'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'password', {
        type: Sequelize.STRING,
        after:'name'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.removeColumn('users');
   }
  
};
