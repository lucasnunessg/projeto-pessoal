'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    
    await queryInterface.bulkInsert('Users', [
      {
        full_name: 'Lucas Pacheco Nunes',
        email: 'lucasnunes@dev.com.br',
        contact: '55999909852'
      },
      {
        full_name: 'Julia Trindade Modernel',
        email: 'julia@dev.com.br',
        contact: '30834234234'
      },
      {
        full_name: 'Cristian Pacheco Nunes',
        email: 'cristian@dev.com.br',
        contact: '55999987814709852'
      },
      {
        full_name: 'Eloisa Pacheco Nunes',
        email: 'lucasnelounes@dev.com.br',
        contact: '3847384'
      },
    ], {
      timestamps: false,
    });
  },

  async down (queryInterface, Sequelize) {
 await queryInterface.bulkDelete('Users', null, {});
  }
};
