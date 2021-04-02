require('dotenv').config();
const jwt = require('jsonwebtoken');

// Tracks token
module.exports = (req, res, next) => {
  try {
    //console.log(req.headers);
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.AUTH_STRING);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({ error: new Error('Invalid request.') });
  }
};