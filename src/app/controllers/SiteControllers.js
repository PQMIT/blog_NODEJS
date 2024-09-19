class SiteControllers {
  // [GET] /
  index(req, res) {
    res.render("news");
  }
  // [GET] /search
  search(req, res) {
    res.send("News Detail");
  }
}
module.exports = new SiteControllers();
