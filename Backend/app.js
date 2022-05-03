var express = require("express");
var blogs = require("./routes/blogs");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

const app = express();
var url =
  "mongodb+srv://starcoder_01:Sneha02@shapeai.4kbfw.mongodb.net/Able?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected");
});

db.on("error", () => {
  console.log("Not Connected");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", blogs);

module.exports = app;
