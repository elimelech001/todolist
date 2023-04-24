const jwt = require('jsonwebtoken');
const  User  = require('../models/user.model'); // Assuming you have a User model defined

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization'); // Assuming the token is sent in the Authorization header
    if (!token) {
      return res.status(401).json({ error: 'Authorization token missing' });
    }

    const decoded = jwt.verify(token, 'your-secret-key'); // Replace 'your-secret-key' with your actual secret key for JWT

    const user = await User.findOne({ where: { id: decoded.userId } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Attach the authenticated user object to the request object for further use
    req.user = user;

    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

module.exports = authMiddleware;
