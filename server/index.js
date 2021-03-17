const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const env = require("./env.js");
const router = require("./routes/user.js");
const app = express();

const mongoConnect = env.mongoUrl;

const port = process.env.PORT || 5000;
const buildPath = path.join(__dirname, "..", "build");

if (!mongoConnect) {
  console.log(mongoConnect);
  console.log("Please set up all of your environment variables");
  console.log("Process exited with code: 1");
  process.exit(1);
}

function connect() {
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);
  mongoose.connect(mongoConnect);
  const mongoDB = mongoose.connection;

  mongoDB.on("error", (err) => {
    console.error(`MongoDB error: \n${err}`);
    throw err;
  });
  if (mongoDB.readyState === 2) {
    mongoDB.once("connected", () => {
      console.log("Connected to MongoDB!");
      return true;
    });
  } else {
    throw new Error("Not connected to MongoDB");
  }
}

function closeConnection() {
  const mongoDB = mongoose.connection;
  if (mongoDB.readyState === 1) {
    mongoDB.close();

    mongoDB.on("error", (err) => {
      console.error(`MongoDB error: ${err}`);
      throw err;
    });
    if (mongoDB.readyState === 3 || mongoDB.readyState === 0) {
      mongoDB.once("disconnected", () => {
        console.log("\n" + "Disconnected from MongoDB!");
        return true;
      });
    } else {
      throw new Error("Unable to disconnect from MongoDB");
    }
  }
}

function getConnectionStatus() {
  return mongoose.connection.readyState;
}

// connect to db
connect();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use((req, res) => {
  res.status(404);

  if (req.accepts("json")) {
    res.json("Page not found");
    return;
  }

  res.type("txt").send("Page not found");
});

app.use(router);

// Testing endpoints
app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

app.listen(port, () => {
  console.log(`Server is live! Port at ${port}`);
});
