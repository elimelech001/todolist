// app.js
require('dotenv').config
console.log(process.env.username);
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');
const todosRoute = require('./routers/todos.route');
const cors = require("cors");
const sequelize = require('./config/sequelize');
const User = require('./models/user.model');
const Todo = require('./models/todo.model');

const app = express();

app.use(cors())

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', userRouter)
app.use('/todos', todosRoute)
// Create a new user`
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

User.sync({ force: true })
  .then(() => {
    console.log('User model synced with the database with force: true');
  })
  .catch((err) => {
    console.error('Unable to sync User model with the database:', err);
  });
Todo.sync({ force: true })
  .then(() => {
    console.log('Todo model synced with the database with force: true');
  })
  .catch((err) => {
    console.error('Unable to sync Todo model with the database:', err);
  });

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
