'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tasks',[
      {
        category: 'DevOps',
        name: 'pm2 configuration',
        description: 'Understand how the ecosystem.config file works',
        date: new Date(2021, 5, 10),
        projectId: 1,
        createdAt: new Date(2021, 5, 10),
        updatedAt: new Date(2021, 5, 10)
      },
      {
        category: 'DevOps',
        name: 'ssl configuration',
        description: 'Understand how to install and use ssl in the server',
        date: new Date(2021, 5, 10),
        projectId: 1,
        createdAt: new Date(2021, 5, 10),
        updatedAt: new Date(2021, 5, 10)
      },
      {
        category: 'High Intensity Interval Training',
        name: 'Burpees',
        description: 'Workout till you sweat',
        date: new Date(2021, 5, 10),
        projectId: 3,
        createdAt: new Date(2021, 5, 10),
        updatedAt: new Date(2021, 5, 10)
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
