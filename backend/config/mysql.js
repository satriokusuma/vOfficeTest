const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const URI = process.env.DB_HOST;
const DATABASE_NAME = process.env.DB_DATABASE;
const USERNAME_DB = process.env.DB_USERNAME;
const PASSWORD_DB = process.env.DB_PASSWORD;
const CONNECTION_DB = process.env.DB_CONNECTION;

const db = new Sequelize(DATABASE_NAME, USERNAME_DB, PASSWORD_DB, {
  dialect: CONNECTION_DB,
  host: URI
});

// const db = mysql.createConnection({
//   host: URI,
//   user: USERNAME_DB,
//   password: PASSWORD_DB,
//   database: DATABASE
// });

// db.connect(function (err) {
//   if (err) {
//     return console.log('error:' + err.message);
//   }
//   console.log(`✅ DataBase Connected !`);
// });
module.exports = db;
