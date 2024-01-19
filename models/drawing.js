const {Model, Datatypes} = require("sequelize");
const sequelize = require('../config/connection');

class Drawing extends Model {};

Drawing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }
)

module.exports = Drawing;