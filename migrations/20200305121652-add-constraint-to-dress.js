'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addConstraint('Dresses', ['UserId'], {
      type: 'foreign key',
      name: 'UserId',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface. removeConstraint('Dresses','UserId');
  }
};
