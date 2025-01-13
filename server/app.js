const bodyParser = require("body-parser");
const express = require("express");
const { errorHandler, notFound } = require("./utils/errorHandler");
const dotenv = require("dotenv").config();
const adminRoutes = require("./routes/adminRoutes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/admin",adminRoutes);

app.use(errorHandler);
app.use(notFound);
module.exports = app;