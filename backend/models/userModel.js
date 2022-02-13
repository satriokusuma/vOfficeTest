const Sequelize = require('sequelize');
const db = require('../config/mysql');



const users = db.define('users',
  {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    createdAt: Sequelize.DATE,
  },
  {
    freezeTableName: false,
    timestamps: false
  });



module.exports = users;