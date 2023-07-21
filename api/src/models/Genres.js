const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define("Genre", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUID,
          },
          name:{
            type: DataTypes.STRING,
            allowNull:false,
          },
    },{timestamps:false})
}