
const Sequelize = require('sequelize');
const db = require('../config/mysql');

const room = db.define('rooms',
  {
    roomName: Sequelize.STRING,
    costPerHour: Sequelize.INTEGER,
    image: Sequelize.STRING,
    description: Sequelize.TEXT
  },
  {
    freezeTableName: false,
    timestamps: false
  }
);

module.exports = room;
