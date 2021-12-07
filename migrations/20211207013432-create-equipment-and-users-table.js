const { query } = require('express');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('drummers', 'price', {
      type: Sequelize.INTEGER,
    });

    await queryInterface.createTable('equipments', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('drummers_equipments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      drummer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drummers',
          key: 'id',
        },
      },
      equipment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'equipments',
          key: 'id',
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.TEXT,
      },
      password_hash: {
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('drummers', 'price');
    await queryInterface.dropTable('equipment');
    await queryInterface.dropTable('drummers_equipments');
    await queryInterface.dropTable('users');
  },
};
