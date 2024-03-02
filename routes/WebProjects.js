const express = require('express');
var projectSchema = require("../models/WebProjectsSchema");
const router = express.Router();

// Gets all items
router.route("").get((req, res) => {
  projectSchema.find(function(err, item) {
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).json(item)
    });
})

module.exports = router