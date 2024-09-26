const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3001;
const route = require("./routes");
const db = require("../src/app/config/db");
const methodOverride = require("method-override");
const SortMiddleware = require("./app/middlewares/SortMiddleware");
//connect db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

//custom middleware
app.use(SortMiddleware);
//http logger
app.use(morgan("tiny"));

//template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: require("./helpers/Handlebars"),
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
