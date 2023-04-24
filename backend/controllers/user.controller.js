const User = require('../models/user.model');

// Controller method for getting all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get users' });
  }
};

// Controller method for getting a user by ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get user' });
  }
};

// Controller method for creating a new user
// exports.createUser = async (req, res) => {
//   const { email, password } = req.body;
//   console.log(req.body);
//   try {
//     const user = await User.create({ email, password });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// Controller method for updating a user by ID
exports.updateUserById = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.update({ firstName, lastName, age });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};

// Controller method for deleting a user by ID
exports.deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
};
