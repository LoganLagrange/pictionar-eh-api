const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const Users = require('./users')(sequelize, Sequelize.DataTypes);
const Drawings = require('./drawings')(sequelize, Sequelize.DataTypes);
const Game = require('./game')(sequelize, Sequelize.DataTypes);

// ASSOCIATIONS HAVE TO GO HERE


const Pictionareh_db = {
  Users,
  Drawings,
  Game,
  sequelize,
  Sequelize
};

module.exports = Pictionareh_db;