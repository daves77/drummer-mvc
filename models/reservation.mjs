export default function initReservationModel(sequelize, DataTypes) {
  return sequelize.define(
    'reservation', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      date: {
        type: DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      underscored: true,
    },
  );
}
