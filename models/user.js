module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Users', {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      user_email: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      user_password: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      profile_picture: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      user_friends: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      user_score: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      leaderboard_scores: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    }, {
      //add xtras here
    });
  
    return User;
  };
  