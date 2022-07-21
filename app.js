/**
 * Load Module Dependencies
 *
 */

const express = require("express");
const validator = require("express-validator");
const router = require("./routes");

const mongoose = require("mongoose");
require("dotenv").config();

const config = require("./config")[process.env.NODE_ENV || "development"];

var {connect , disconnect} 	= require('./mongoDB/mongoDB');

// if(process.env.NODE_ENV !== ' test') {
// 	connect();
// }

const app = express();

var cors = require("cors");
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Content-Type, access-control-allow-origin, x-api-applicationid, authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, PUT, PATCH, POST, DELETE"
  );
  next();
});

// Parser JSON body Requests
app.use(express.json());

// Express Validator
app.use(validator());

//Authentication
// app.use(
//   authenticate().unless({
//     path: ['/dubepayapi/logs/healthcheck'],
//   })
// );

router(app);

app.use(function notFound(err, req, res, next) {
  res.json({ message: err.message });
});

// Listen on Port
const server = app.listen(18081, function connectionListener() {
  console.log(`API server running on port ${server.address().port} in ${app.get("env")} mode`)

  console.log(`Hi there! I'm listening on port ${server.address().port} in ${app.get("env")} mode.`)

});

// Export app interface
module.exports = app;