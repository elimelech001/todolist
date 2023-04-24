const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const register = require('../controllers/register')
const login = require('../controllers/login')

// Route for getting all users
router.get('/', UserController.getAllUsers);

// Route for getting a user by ID
router.get('/:id', UserController.getUserById);

// Route for creating a new user
router.post('/register', register);

router.post('/login', login);

// Route for updating a user by ID
router.put('/:id', UserController.updateUserById);

// Route for deleting a user by ID
router.delete('/:id', UserController.deleteUserById);

module.exports = router;
