var express = require('express');
var router = express.Router();
var contacts_model = require('../models/contacts_model');
var mongoose = require('mongoose');
var request = require('request');
mongoose.connect('mongodb://localhost/basket');
/* GET home page. */
router.get('/', function(req, res, next) {
  contacts_model.getContacts(function(err,data){
  	if(err){
  		throw err;
  	}
  	res.json(data);
  });
});
router.get('/:id', function(req, res, next) {
  contacts_model.getUserById(req.params.id,function(err,data){
  	if(err){
  		throw err;
  	}
  	res.json(data);
  });
});
router.post('/add',function(req,res,next){
  var user = req.body;
  contacts_model.addUser(user,function(err,data){
    res.json(data);
  })
});



module.exports = router;
