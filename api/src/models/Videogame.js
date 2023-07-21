// const sequelize = require('sequelize')
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUID,
    },
    name:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    description:{
      type:DataTypes.TEXT,
    },
    plataforms:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    background_image:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    released:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    rating:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },{timestamps:false});
};
