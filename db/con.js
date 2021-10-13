const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Db = process.env.DATABASE;
mongoose
  .connect(Db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connectin suceesfull");
  })
  .catch((err) => {
    console.log("data base is not connected", err);
  });
