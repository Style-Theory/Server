'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Dresses', {
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
        notNull:true,
        defaultValue : false
      },
      due_date: {
        type: Sequelize.DATE
      },
      rent_id: {
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        notNull:true
      },
      photos: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('Dresses');
  }
};