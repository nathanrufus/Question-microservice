// etl/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('questions_db', 'my_user', 'my_password', {
  host: 'mysql',
  dialect: 'mysql'
});

module.exports = sequelize;
