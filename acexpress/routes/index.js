var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET Register */
// router.post('/register', function(req, res, next) {
//   res.json({login:true});
// });
require('../models/batch');
var mongoose = require('mongoose');
var Superhero= mongoose.model('superheroes');
router.post('/addd', function(req, res) {
  new Superhero({name : req.body.name,
     date : req.body.date,
      time : req.body.time,
    username: req.body.username}
 
 
)
  .save(function(err, superhero) {
    console.log(superhero)
    res.json(superhero);
  });
});

router.get('/view',function(req,res){
  Superhero.find(function(err,superhero){
    console.log(err);
    console.log(superhero);
    res.json(superhero);
  });
});
require('../models/book');
var Book=mongoose.model('books');
router.post('/newadd', function(req, res) {
  new Book({name : req.body.name,
    email : req.body.email,
    password : req.body.password,
    contact: req.body.contact}
)
.save(function(err, book) {
  console.log(book)
  res.json(book);
});
});
router.get('/newview',function(req,res){
  Book.find(function(err,book){
    console.log(err);
    console.log(book);
    res.json(book);
  });
});
module.exports = router;
