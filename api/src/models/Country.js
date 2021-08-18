const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    code:{
      type: DataTypes.STRING,
      primaryKey:true,
    },
    name: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    flag:{
      type:DataTypes.VIRTUAL,
      allowNull:false,
      get(){
        const codeMin = this.code.toLowerCase()
        return `https://restcountries.eu/data/${codeMin}.svg`
      }
    },
    continent:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    capital:{
      type:DataTypes.STRING,
      allowNull:false
    },
    subregion:{
      type:DataTypes.STRING,
    },
    area:{
      type:DataTypes.BIGINT,
    },
    population:{
      type:DataTypes.BIGINT,
    },
  },{
    timestamps: false,
  })
};
