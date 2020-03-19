'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contact', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contactName: {
        type: Sequelize.STRING
      },
      contactEmail: {
        type: Sequelize.STRING
      },
      contactPhone: {
        type: Sequelize.STRING
      },
      contactMsg: {
        type: Sequelize.STRING
      },
      responded: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('contact');
  }
};