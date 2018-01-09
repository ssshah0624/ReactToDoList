const express = require('express');
const router = express.Router();
const TodoItem =  require('../models/TodoItem.js')

router.post('/add', (req, res) => {

  const testTodo = new TodoItem({
    task: req.body.taskText
  });

  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })

});

router.get('/all', (req, res) => {

  TodoItem.find({})
    .then(function(data){
      res.json(data)
    })

});

router.post('/remove', (req, res) => {

  TodoItem.remove({_id: req.body.id})
    .then(response => {
      res.json({success: true})
    })
    .catch(function(error){
      console.log("error removing", error)
    })

});

router.post('/toggle', (req, res) => {

  TodoItem.findOne({_id: req.body.id})
    .then((item) => {
      item.completed = !item.completed
      item.save((err, item) => {
        if(err){
          res.status(500).send(err);
        }else{
          res.status(200).send({success: true});
        }
      })
    })

});

module.exports = router;
