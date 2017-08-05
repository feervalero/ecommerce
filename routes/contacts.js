var express = require('express');
var router = express.Router();
var contacts_model = require('../models/contacts_model');
var mongoose = require('mongoose');
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

module.exports = router;
