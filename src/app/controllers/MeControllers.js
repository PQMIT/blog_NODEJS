const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");

class MeControllers {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}).sortable(req), Course.countDocumentsWithDeleted({ deleted: true })])
      .then(([courses, deleteCount]) =>
        res.render("me/stored-courses", {
          deleteCount,
          courses: mutipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }

  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .then((courses) => {
        res.render("me/trash-courses", {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}
module.exports = new MeControllers();
