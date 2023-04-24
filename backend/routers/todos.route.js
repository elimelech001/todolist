const express = require('express');
const todoController = require('../controllers/todos.controllers');
const auth = require('../middlewere/auth')
const router = express.Router();

// Define routes for Todo CRUD operations
router.get('/', todoController.getTodos);
router.post('/',auth, todoController.createTodo);
router.get('/:id', todoController.getTodoById);
router.put('/:id',auth, todoController.updateTodo);
router.delete('/:id',auth, todoController.deleteTodo);

module.exports = router;
