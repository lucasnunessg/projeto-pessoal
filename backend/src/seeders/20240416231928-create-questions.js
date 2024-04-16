'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
      },
      {
        title: 'Em que ano começou a Segunda Guerra Mundial?',
        description: 'Assinale somente uma alternativa',
        difficulty: 2,
        userId: 1 // ID do primeiro usuário
      },
      {
        title: 'Qual país foi invadido primeiro durante a Segunda Guerra Mundial?',
        description: 'Assinale somente uma alternativa',
        difficulty: 3,
        userId: 2 // ID do segundo usuário
      },
      {
        title: 'Qual evento marcou o fim da Segunda Guerra Mundial na Europa?',
        description: 'Assinale somente uma alternativa',
        difficulty: 4,
        userId: 3 // ID do terceiro usuário
      },
      {
        title: 'Qual foi o nome dado à operação de desembarque das forças aliadas na Normandia durante a Segunda Guerra Mundial?',
        description: 'Assinale somente uma alternativa',
        difficulty: 5,
        userId: 4 // ID do quarto usuário
      },
    ]);
  },
    

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Questions', null, {})
  }
};
