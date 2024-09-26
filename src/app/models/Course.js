const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    videoId: { type: String, maxLength: 600, required: true },
    level: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

//custom query helpers
CourseSchema.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const isValidType = ["asc", "desc"].includes(req.query.type);
    return this.sort({
      [req.query.column]: isValidType ? req.query.type : "desc",
    });
  }
  return this;
};

mongoose.plugin(slug);

CourseSchema.plugin(mongooseDelete, {
  deleted: true,
  deletedAt: true,
  overrideMethods: "all",
});
module.exports = mongoose.model("Course", CourseSchema);
