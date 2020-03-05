'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        notNull:true
      },
      price: {
        type: Sequelize.INTEGER,
        notNull:true
      },
      status: {
        type: Sequelize.BOOLEAN,
        notNull:true
      },
      due_date: {
        type: Sequelize.DATE,
        notNull:true
      },
      rent_id: {
        type: Sequelize.INTEGER,
        notNull:true
      },
      UserId: {
        type: Sequelize.INTEGER,
        notNull:true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dresses');
  }
};