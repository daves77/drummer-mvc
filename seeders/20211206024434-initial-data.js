module.exports = {
  up: async (queryInterface, Sequelize) => {
    const drummersList = [
      {
        name: 'david',
        price: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'gary',
        price: 69,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    const equipmentList = [
      {
        name: 'guitar',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'drums',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'piano',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    const [guitar, drums, piano] = await queryInterface.bulkInsert('equipments', equipmentList, {
      returning: true,
    });

    const [gary, david] = await queryInterface.bulkInsert('drummers',
      drummersList, { returning: true });

    const drummerEquipmentList = [
      {
        drummer_id: gary.id,
        equipment_id: guitar.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: gary.id,
        equipment_id: piano.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: david.id,
        equipment_id: piano.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: gary.id,
        equipment_id: drums.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('drummer_equipment', drummerEquipmentList);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('drummers', null, {});
    await queryInterface.bulkDelete('equipments', null, {});
  },
};
