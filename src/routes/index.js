const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./course");
const meRouter = require("./me");

function routes(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
  app.use("/me", meRouter);
  app.use("/courses", coursesRouter);
}
module.exports = routes;
