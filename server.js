require('dotenv').config();
const path = require("path");
const express = require("express");
const morgan = require('morgan');
const mongoose = require("mongoose");
const { authRoute, apiRoute } = require("./routes");
const app = express();

const mongoConnect = process.env.MONGO_URL;

const port = process.env.PORT || 8080;

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

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP request logger
app.use(morgan('tiny'));
app.use('/auth', authRoute);

// TODO: uncomment when schema is figured out
//app.use('/api', apiRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(port, () => {
  console.log(`Server is live at ${port}`);
});
