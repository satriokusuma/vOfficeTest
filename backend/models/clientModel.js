
const Sequelize = require('sequelize');
const db = require('../config/mysql');



const client = db.define('clients',
  {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    phone: Sequelize.STRING,
    credit: Sequelize.INTEGER,
    createdAt: Sequelize.DATE,
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
      allowNull: false
    }
  },
  {
    freezeTableName: false,
    timestamps: false
  });



module.exports = client;
