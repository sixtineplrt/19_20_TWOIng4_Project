var bodyParser = require('body-parser')
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require('mongoose');
const config = require('./config/database.config');
const app = express();

// on se connecte à la base de données
mongoose.connect(config.url, { useNewUrlParser: true });

var usersRouter = require("./routes/users");
var sensorRouter = require("./routes/sensor");
var measureRouter = require("./routes/measure");

app.use(logger("dev"));
app.use(bodyParser.json()); // <--- Here
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/users", usersRouter);
app.use("/sensors", sensorRouter);
app.use("/measures", measureRouter);

module.exports = app;
