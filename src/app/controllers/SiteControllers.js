const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");

class SiteControllers {
  // [GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: mutipleMongooseToObject(courses) });
      })
      .catch(next);
  }
  // [GET] /search
  search(req, res) {
    res.send("News Detail");
  }
}
module.exports = new SiteControllers();
