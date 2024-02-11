/** @format */

const morgan = require("morgan");
const cors = require("cors");
const express = require("express");

const applyMiddleware = (app) => {
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(cors());
};

module.exports = applyMiddleware;
