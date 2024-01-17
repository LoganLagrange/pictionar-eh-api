const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = require('./user')(sequelize, Sequelize.DataTypes);
const Drawing = require('./drawing')(sequelize, Sequelize.DataTypes);
const Game = require('./game')(sequelize, Sequelize.DataTypes);
const Answer = require('./answer')(sequelize, Sequelize.DataTypes);
// ASSOCIATIONS HAVE TO GO HERE


const Pictionareh_db = {
  User,
  Drawing,
  Game,
  Answer,
  sequelize,
  Sequelize
};

module.exports = Pictionareh_db;
