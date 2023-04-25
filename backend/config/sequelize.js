// sequelize.js

const { Sequelize } = require('sequelize');
const config = require('./config'); // Import Sequelize configuration

// Create Sequelize instance
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    port: config.development.port,
    dialect: config.development.dialect,
    logging: config.development.logging,
  }
)

module.exports = sequelize;
 