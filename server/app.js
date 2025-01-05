const bodyParser = require("body-parser");
const express = require("express");
const { errorHandler, notFound } = require("./utils/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.use(errorHandler);
app.use(notFound);
module.exports = app;