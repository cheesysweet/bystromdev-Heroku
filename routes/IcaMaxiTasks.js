const express = require('express');
var taskSchema = require("../models/IcaMaxiTaskSchema");
const router = express.Router();

// Gets all items
router.route("").get((req, res) => {
  taskSchema.find(function(err, item) {
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).json(item)
    });
})


// This updates a item if it exists within the database. 
router.route("/:id").put(function(req,res){
  var itemId = req.params.id;
  var body =  req.body

  taskSchema.findOneAndUpdate({ _id: itemId}, {
    $set: { Title: body.Title, Info: body.Info, Image: body.Image, Status: body.Status }},
    function(err, item) {
      if (err) {
       res.status(404).json({ "error" : "Could not find the task"})
      }
      res.json(item)
    });
})


// adds a item to database
router.route("").post(function(req, res) {
  var item = new taskSchema();
  var body = req.body;


  taskSchema.findOne({ Title: body.Title, Info: body.Info }, async function(err, storedItem) { // finds out if the item exists in the database
          if (err) {
          res.send(err);
          } else if (storedItem === null) { // stores a new item
            item.Title = body.Title
            item.Info = body.Info
            item.Image = body.Image
            item.Status = body.Status
      
          await item.save(function(err) {
              if (err) {
              res.status(404).send(err);
              }
          })
          res.status(200).json(item);
      } else {
      res.status(404).json({ "message" : "Task: " + body.Title + " already exists"});
      }
  })
})


module.exports = router
