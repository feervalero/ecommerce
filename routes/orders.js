var express = require('express');
var router = express.Router();
var Orders = require('../models/orders_model');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basket');
var db = mongoose.connect;
/* GET home page. */
router.get('/', function(req, res, next) {
  Orders.getOrders(function(err,orders){
  		if(err){
  			throw err;
  		}
  		res.json(orders);
  });
});

module.exports = router;
