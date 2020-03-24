require('../../../secrets.js');
const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DATABASE_URL,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
  }
);

// const db = new Sequelize('capstone', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//   dialect: 'mysql',
//   host: 'localhost',
//   port: 3306
// });

// 'mysql://localhost:3306/capstone', {logging: false}

// super permissions in terminal to allow access without username and password
// super user permissions
module.exports = db;
