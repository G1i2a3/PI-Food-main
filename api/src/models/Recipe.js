const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isFavorite:{
      type: DataTypes.BOOLEAN
    },
    image: {
      type: DataTypes.BLOB
    },
    healthScore: {
      type: DataTypes.INTEGER
    },
    readyInMinutes: {
      type: DataTypes.INTEGER
    },
    servings: {
      type: DataTypes.INTEGER
    },
    weightWatcherSmartPoints: {
      type: DataTypes.INTEGER
    },
    steps: {
      type: DataTypes.TEXT,
    }
    // healthScore: {
    //   type: DataTypes.NUMBER,
    // }
  });
};
