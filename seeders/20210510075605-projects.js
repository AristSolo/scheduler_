'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Projects',[
      {
        name: 'Investment',
        description: 'Track growth by skills and assets acquired.',
        purpose: 'Wealth creation',
        createdAt: new Date(2021, 5, 10),
        updatedAt: new Date(2021, 5, 10)
      },
      {
        name: 'IntraApp',
        description: 'Track task completion to monitor growth.',
        purpose: 'Project Management',
        createdAt: new Date(2021, 5, 10),
        updatedAt: new Date(2021, 5, 10)
      },
      {
        name: 'Exercise',
        description: 'Fitness is lifestyle',
        purpose: 'Healthy living',
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
