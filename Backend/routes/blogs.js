var express = require("express");
var router = express.Router();
var Post = require("../models/blogs");

router.get("/jobs", (req, res, next) => {
  Post.find()
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Here are all the job posting",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/jobs", (req, res, next) => {
  console.log("Request", req);
  Post.insertMany([
    {
      role: req.body.role,
      description: req.body.description,
      place: req.body.place,
      phone: req.body.phone,
    },
  ])
    .then((result) => {
      res.status(200).json({
        message: "Successfully Inserted",
        Inserted_Blog: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: error,
      });
    });
});

module.exports = router;
