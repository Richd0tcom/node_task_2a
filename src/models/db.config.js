const { Sequelize } =  require("sequelize");
const dotenv = require('dotenv');
dotenv.config();

const db = new Sequelize('airline', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect:'mysql'
});

module.exports = db