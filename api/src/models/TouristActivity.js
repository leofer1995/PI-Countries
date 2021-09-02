const { DataTypes } = require('sequelize');
//const { contained } = require('sequelize/types/lib/operators');
const Country = require('../db.js');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        name:{
            type:DataTypes.STRING,
            //unique:"idCompuesto",
            set (value) {
                this.setDataValue('name', value.toLowerCase());
             }
        },
        difficulty:{
            type:DataTypes.STRING,
        },
        duration:{
            type:DataTypes.STRING,
        },
        station:{
            type:DataTypes.ENUM('summer', 'autumn', 'winter', 'spring','all'),
        },
    },{
        timestamps: false,
      }
    )}