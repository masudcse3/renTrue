/** @format */

const globalErrorHandler = (err, _req, res, _next) => {
  if (err.status) {
    console.log("[ERROR]:", err);
    return res.status(err.status).send(`<h1>${err.message}</h1>`);
  } else {
    console.log("[ERROR]:", err);
    return res.status(500).send(`<h1>Something went wrong on the server</h1>`);
  }
};

module.exports = globalErrorHandler;
