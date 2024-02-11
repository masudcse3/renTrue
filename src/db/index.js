/** @format */
const mongoose = require("mongoose");
/**
 *
 * @param {string} url
 */
const dbConnection = async (url) => {
  try {
    await mongoose.connect(url, {
      serverSelectionTimeoutMS: 1000,
      dbName: process.env.DATABASENAME,
    });
    console.log("Database Connected");
  } catch (err) {
    console.log("[Database Error]", err);
  }
};

module.exports = dbConnection;
