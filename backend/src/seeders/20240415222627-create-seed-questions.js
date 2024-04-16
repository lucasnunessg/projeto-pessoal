'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Questions', [
      {
        title: 'Qual foi o evento que desencadeou o início da Segunda Guerra Mundial?',
        description: 'Descreva o evento que marcou o início da Segunda Guerra Mundial.',
        difficulty: 1, 
        userId: 1, 
      },
      {
        title: 'Quais foram os principais países envolvidos na Segunda Guerra Mundial?',
        description: 'Cite os principais países que participaram da Segunda Guerra Mundial e seus aliados.',
        difficulty: 2, 
        userId: 1, 
      },
      {
        title: 'Quais foram as consequências da Segunda Guerra Mundial?',
        description: 'Explique algumas das consequências importantes que resultaram da Segunda Guerra Mundial.',
        difficulty: 3, 
        userId: 1, 
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};


