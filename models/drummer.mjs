export default function initDrummerModel(sequelize, DataTypes) {
  return sequelize.define(
    'drummer', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.TEXT,
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
