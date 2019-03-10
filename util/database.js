const mysql = require('mysql2');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('tableName', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
