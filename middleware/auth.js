require('dotenv').config();
const jwt = require('jsonwebtoken');

// Tracks token
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.AUTH_STRING);
    const userId = decodedToken.userId;

    if (req.body.userId && req.body.userId !== userId) throw 'Invalid userID';

    next();
  } catch {
    res.status(401).json({ error: new Error('Invalid request.') });
  }
};