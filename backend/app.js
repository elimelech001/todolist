// app.js

const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');
const todosRoute = require('./routers/todos.route');
const cors = require("cors");
const sequelize = require('./config/sequelize');

const app = express();

app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', userRouter)
app.use('/todos', todosRoute)
console.log();
// Create a new user`
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
