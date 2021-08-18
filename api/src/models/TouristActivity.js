const { DataTypes } = require('sequelize');
//const { contained } = require('sequelize/types/lib/operators');
const Country = require('../db.js');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        name:{
            type:DataTypes.STRING,
            unique:"idCompuesto"
        },
        difficulty:{
            type:DataTypes.INTEGER,
        },
        duration:{
            type:DataTypes.DATE,
        },
        station:{
            type:DataTypes.ENUM('summer', 'autumn', 'winter', 'spring'),
        },
        id_country:{
            type:DataTypes.STRING,
            unique:"idCompuesto"
            // references: {
            //     model: Country,
            //     key: "code",
            // }
        }
    },{
        timestamps: false,
      }
    )}