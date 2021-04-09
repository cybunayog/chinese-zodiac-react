require('dotenv').config();
const path = require("path");
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const { authRoute, apiRoute, testRoute } = require("./routes");

const app = express();
const mongoConnect = process.env.MONGO_URL;

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is live at ${port}`);
});

// Data parsing
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://chinese-zodiac-mern.herokuapp.com"
  ],
  credentials: true,
}));

// Check if mongo url is in the right environment
if (!mongoConnect) {
  console.log(mongoConnect);
  console.log("Please set up all of your environment variables");
  console.log("Process exited with code: 1");
  process.exit(1);
}

// Connect to DB
mongoose.connect(mongoConnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(e => {
  console.error('Error on connecting mongoose: ', e);
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!');
});

// HTTP request logger
app.use('/auth', authRoute);
app.use('/test', testRoute)
app.use('/api', apiRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
