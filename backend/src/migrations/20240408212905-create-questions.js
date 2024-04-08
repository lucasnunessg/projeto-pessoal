'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.createTable('Questions', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,
  },
  tittle: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  description: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  difficulty: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  userId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: 'Users',
      key: 'id'
    }
  }
});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('Questions');
  }
};
