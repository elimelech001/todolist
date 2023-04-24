const Todo = require('../models/todo.model');

// Get all Todos
const wrongUser = `you have not created this todo`
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get Todos', error: err.message });
  }
};

// Create a new Todo
exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create({...req.body,userId:req.user.id});
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create Todo', error: err.message });
  }
};

// Get a Todo by ID
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get Todo', error: err.message });
  }
};

// Update a Todo by ID
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (todo.userId!=req.user.id) {
      return res.status(404).json({ message: wrongUser });
    }
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    await todo.update(req.body);
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update Todo', error: err.message });
  }
};

// Delete a Todo by ID
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (todo.userId!=req.user.id) {
      return res.status(404).json({ message: wrongUser });
    }
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    await todo.destroy();
    res.json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete Todo', error: err.message });
  }
};
