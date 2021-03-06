const express = require("express");
const app = express();
const api = require("./api");
const morgan = require("morgan"); // logger
const bodyParser = require("body-parser");
const cors = require("cors");

app.set("port", process.env.PORT || 8084);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use("/api", api);
app.use(express.static("static"));

app.use(morgan("dev"));

app.use(function (req, res) {
  const err = new Error("Not Found");
  err.status = 404;
  err.errorMsg = "not found";
  res.json(err);
});

// Add MongoDB connection in later... first just run app.listen (below)
const mongoose = require("mongoose");
mongoose.connect("mongodb://mongoaboutbook:27017/aboutBook", {
  useNewUrlParser: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to mongoDB");

  const startup = require("./startup");

  app.listen(app.get("port"), function () {
    console.log("API Server Listening on port " + app.get("port") + "!");
  });
});
