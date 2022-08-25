const {Sequelize, DataTypes}= require('sequelize');
const db = require('./db.config')

const Airports = db.define('airports', {
    
          ident : {
              type:DataTypes.STRING
          },
          type : {
            type:DataTypes.STRING
        },
        name : {
            type:DataTypes.STRING
        },
        latitude_deg : {
            type:DataTypes.DOUBLE
        },
        longitude_deg : {
            type:DataTypes.DOUBLE
        },
        elevation_ft : {
            type:DataTypes.INTEGER
        },
        continent : {
            type:DataTypes.STRING
        },
        iso_country : {
            type:DataTypes.STRING
        },
        iso_region : {
            type:DataTypes.STRING
        },
        municipality : {
            type:DataTypes.STRING
        },
        scheduled_service : {
            type:DataTypes.STRING
        },
        gps_code : {
            type:DataTypes.STRING
        },
        iata_code : {
            type:DataTypes.STRING
        },
        local_code : {
            type:DataTypes.STRING
        },
        home_link : {
            type:DataTypes.STRING
        },
        wikipedia_link : {
            type:DataTypes.STRING
        },
        keywords : {
            type:DataTypes.STRING
        }
        },
        {
          timestamps: false,
          freezeTableName: true,
          tableName: "airports",
        }
      )

  Airports.sync()
  
  module.exports = Airports