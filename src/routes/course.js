const express = require("express");
const router = express.Router();

const CourseControllers = require("../app/controllers/CourseControllers");

//CourseControllers.show
router.get("/create", CourseControllers.create);
router.post("/store", CourseControllers.store);
router.get("/:id/edit", CourseControllers.edit);
router.post("/handle-form-actions", CourseControllers.handleFormActions);
router.put("/:id", CourseControllers.update);
router.patch("/:id/restore", CourseControllers.restore);
router.delete("/:id", CourseControllers.destroy);
router.get("/:slug", CourseControllers.show);

module.exports = router;
