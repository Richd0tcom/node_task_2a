const {Sequelize, DataTypes}= require('sequelize');
const db = require('./db.config')

const Order = db.define('order', {
    
       
          from_airport : {
              type:DataTypes.STRING
          },
          to_airport : {
              type:DataTypes.STRING
          },
          stripe_id : {
              type:DataTypes.STRING
          },
          total : {
              type:DataTypes.FLOAT
          },
          status : {
              type:DataTypes.STRING
          },
          from_country : {
              type:DataTypes.STRING
          },
          to_country : {
              type:DataTypes.STRING
          }
        },
        {
          timestamps: true,
          freezeTableName: true,
          tableName: "order",
        }
      )

  
  
  module.exports = {order}
