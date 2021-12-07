module.exports = {
  up: async (queryInterface, Sequelize) => {
    const drummersList = [
      {
        name: 'david',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'gary',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    let drummers = await queryInterface.bulkInsert('drummers',
      drummersList, { returning: true });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('drummers', null, {});
  },
};
