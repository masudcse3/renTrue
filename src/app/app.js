/** @format */

const express = require("express");
const applyMiddleware = require("./middleware");
const globalErrorHandler = require("./error");
const router = require("@routes");
const { notFound } = require("../error");

const app = express();
applyMiddleware(app);
app.use("/health", (req, res) => {
  res.status(200).json({ message: "Health is okay" });
});
app.use(router);
app.get("*", (req, res, next) => {
  next(notFound());
});
app.use(globalErrorHandler);
module.exports = app;
