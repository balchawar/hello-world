let testRouter = require("./test");

module.exports = function initRoutes(app) {
  console.log("loading routes");

  app.use("/testapi", testRouter);
};
