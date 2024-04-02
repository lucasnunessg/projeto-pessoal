'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('Games', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    score: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      field: 'user_id',
      references: {
        model: 'Users',
        key: 'id',
      }
    },
  });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('Games')
  }
};
