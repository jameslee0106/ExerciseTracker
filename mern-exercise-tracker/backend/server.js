const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json())

const port = 3001;
const uri = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
})


const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('./exercises', exercisesRouter);
app.use('./users', usersRouter);

app.listen(port, () => {
  console.log(`App is listening at http://localhost${port}`);
})

