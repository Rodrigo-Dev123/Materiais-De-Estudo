const mongoose = require("mongoose");

mongoose
  .connect("mongodb://db:27017/test")
  .then(() => console.log("Conected to MongDB"))
  .catch((err) => console.log(err));
