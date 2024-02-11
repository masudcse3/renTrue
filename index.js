/** @format */

require("module-alias/register");
require("dotenv").config();
const http = require("http");
const app = require("@app/app.js");
const dbConnection = require("@db");
const server = http.createServer(app);

// database connection string
const dbURL = `mongodb://${process.env.DATABASEUSERNAME}:${process.env.DATABASEPASSWORD}@localhost:27017`;

async function main() {
  const port = process.env.PORT || 8080;
  try {
    await dbConnection(dbURL);
    server.listen(port, () => {
      console.log("Server starts and listen on port", port);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
