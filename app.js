const express = require("express");
const app = express();
const dotenv = require("dotenv");
const itemRoutes = require("./router/itemRouter");
dotenv.config();
require("./db/con");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(itemRoutes);

app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.listen(3000, () => {
  console.log(`sarver started at port 3000 `);
});
