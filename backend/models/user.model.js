// user.model.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // Import Sequelize instance

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Set default value to current timestamp
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Set default value to current timestamp
    },
  },
  {
    tableName: 'users', // Name of the table in the PostgreSQL database
    timestamps: true, // Enable timestamps
    updatedAt: false, // Disable updatedAt column
  }
);

module.exports = User;
