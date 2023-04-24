const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  User  = require('../models/user.model'); // Assuming you have a User model defined

const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({ email, password});

    // Generate JWT token
    const token = jwt.sign({ userId: newUser.id }, 'your-secret-key'); // Replace 'your-secret-key' with your actual secret key for JWT

    // Send success response with token
    return res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = register;
