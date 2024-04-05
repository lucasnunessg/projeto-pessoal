'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.createTable('categories', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,    
  },
  name: {
    allowNull: false, 
    type: Sequelize.STRING,
  },
  difficulty: {
    allowNull: false,
    type: Sequelize.STRING
  },
  description: {
    allowNull: false,
    type: Sequelize.STRING,
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
  }
}, {
  underscored: true,
  timestamps: false,
})
  },

  async down (queryInterface, Sequelize) {
    
  await queryInterface.dropTable('categories')
  }
};
