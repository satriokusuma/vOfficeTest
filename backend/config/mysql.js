const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const mysql = require('mysql2/promise');

dotenv.config();

const URI = process.env.DB_HOST;
const DATABASE_NAME = process.env.DB_DATABASE;
const USERNAME_DB = process.env.DB_USERNAME;
const PASSWORD_DB = process.env.DB_PASSWORD;
const CONNECTION_DB = process.env.DB_CONNECTION;


// await mysql.createConnection({
//   user: USERNAME_DB,
//   password: PASSWORD_DB,
// }).then((Sequelize) => {
//   Sequelize.query(`CREATE DATABASE IF NOT EXISTS ${DATABASE_NAME};`);
// });

const db = new Sequelize(DATABASE_NAME, USERNAME_DB, PASSWORD_DB, {
  dialect: CONNECTION_DB,
  host: URI
});

db.authenticate()
  .then(function (err) {
    console.log('Connection has been established successfully...');
  })
  .catch(function (err) {
    console.log('Sory Unable to connect to the database try again later...');
  });

module.exports = db;
