// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize');
// const User = require('./user.model');

// const Todo = sequelize.define(
//   'Todo',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     completed: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },
//     priority: {
//       type: DataTypes.ENUM('low', 'medium', 'high'),
//       defaultValue: 'medium',
//     },
//     userId: { // Add the userId column
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     createdAt: {
//       type: DataTypes.DATE,
//       defaultValue: DataTypes.NOW,
//     },
//   },
//   {
//     tableName: 'todos',
//     timestamps: true,
//     updatedAt: false,
//   }
// );

// // Define association between Todo and User models
// Todo.belongsTo(User, { foreignKey: 'userId' });

// module.exports = Todo;
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./user.model');

const Todo = sequelize.define(
  'Todo',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    priority: {
      type: DataTypes.ENUM('low', 'medium', 'high'),
      defaultValue: 'medium',
    },
    userId: { // Add the userId column
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'todos',
    timestamps: true,
    updatedAt: false,
  }
);

// Define association between Todo and User models
Todo.belongsTo(User, { foreignKey: 'userId' });

// Sync the Todo model with the database, with force set to true


module.exports = Todo;
   