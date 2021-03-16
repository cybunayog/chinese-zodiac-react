require('dotenv').config();

const env = {
  mongoUrl: process.env.MONGO_URL,
}

module.exports = env;