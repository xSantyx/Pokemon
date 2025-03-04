const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.TEXT,
    },
  });
};
