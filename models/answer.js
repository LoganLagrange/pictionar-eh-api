module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define('Answer', {
      answer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      word_content: {
        type: DataTypes.STRING(255),
        allowNull: false
      },

    });
    
    return Answer;
  };