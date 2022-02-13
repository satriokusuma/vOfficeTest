
const Sequelize = require('sequelize');
const db = require('../config/mysql');
const roomModel = require('./roomModel');
const clientModel = require('./clientModel');


const roomUsage = db.define('roomUsage',
  {
    clientId: {
      type: Sequelize.INTEGER,
      references: 'clients',
      referencesKey: 'id'
    },
    roomId: {
      type: Sequelize.INTEGER,
      references: 'rooms',
      referencesKey: 'id'
    },
    startTime: Sequelize.STRING,
    endTime: Sequelize.STRING,
    bookingDate: Sequelize.DATE,
    quotaUsed: Sequelize.INTEGER,
    createdAt: Sequelize.DATE,
  },
  {
    freezeTableName: true,
    timestamps: false
  });

roomUsage.hasOne(roomModel, { foreignKey: 'id' });
roomUsage.belongsTo(roomModel, { foreignKey: 'id' });

roomUsage.hasOne(clientModel, { foreignKey: 'id' });
roomUsage.belongsTo(clientModel, { foreignKey: 'id' });

module.exports = roomUsage;
