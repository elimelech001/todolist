// app.js

const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');
const todosRoute = require('./routers/todos.route');
const cors = require("cors");
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users',userRouter)
app.use('/todos',todosRoute)
// Create a new user`


app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
