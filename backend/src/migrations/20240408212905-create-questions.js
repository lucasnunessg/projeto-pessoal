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
  title: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  difficulty: {
    type: Sequelize.INTEGER
  },
  userId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
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
