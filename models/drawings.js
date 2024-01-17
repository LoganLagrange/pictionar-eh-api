module.exports = (sequelize, DataTypes) => {
    const Drawings = sequelize.define('Drawings', {
      svg_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      SVG_filename: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      word_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      //add xtras here
    });
  
    Drawings.associate = function(models) {
      Drawings.belongsTo(models.Users, { foreignKey: 'word_id', as: 'word' });
    };
  
    return Drawings;
  };
  