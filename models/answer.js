const {Model, Datatypes} = require("sequelize");
const sequelize = require('../config/connection');

class Drawing extends Model {};

Answer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    word: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },
  {
    sequelize
  }
)

module.exports = Answer;