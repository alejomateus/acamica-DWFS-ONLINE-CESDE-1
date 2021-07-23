const express = require("express");
const cors = require("cors");
const { validationKeyMiddleware } = require("./middlewares/auth");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(validationKeyMiddleware);
module.exports = app;