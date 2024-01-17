module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('Game', {
      words_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      message_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      guess_data: {
        type: DataTypes.STRING,
        allowNull: false
      },
      SVG_filename: {
        type: DataTypes.STRING,
        allowNull: false
      },
      game_timer: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      join_rooms: {
        type: DataTypes.STRING,
        allowNull: false
      },
      create_rooms: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      //add xtras here
    });
  
    return Game;
  };
  