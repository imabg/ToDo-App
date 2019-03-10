const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Todo = sequelize.define('todo', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Todo;
