import { Sequelize } from 'sequelize';
import allConfig from '../config/config.js';

import initDrummerModel from './drummer.mjs';
import initReservationModel from './reservation.mjs';
import initUserModel from './user.mjs';
import initEquipmentModel from './equipment.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// add your model definitions to db here
db.Drummer = initDrummerModel(sequelize, Sequelize.DataTypes);
db.Reservation = initReservationModel(sequelize, Sequelize.DataTypes);
db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Equipment = initEquipmentModel(sequelize, Sequelize.DataTypes);

// one drummer to many reservations
db.Drummer.hasMany(db.Reservation);
db.Reservation.belongsTo(db.Drummer);

// many drummers to many equipments
db.Drummer.belongsToMany(db.Equipment, { through: 'drummers_equipment' });
db.Equipment.belongsToMany(db.Drummer, { through: 'drummers_equipment' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
