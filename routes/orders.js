var express = require('express');
var router = express.Router();
var Orders = require('../models/orders_model');
var mongoose = require('mongoose');

mongoose.connect('mongodb://feervalero:IAS343073@cluster0-shard-00-00-qvk6z.mongodb.net:27017,cluster0-shard-00-01-qvk6z.mongodb.net:27017,cluster0-shard-00-02-qvk6z.mongodb.net:27017/basket?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',{ useMongoClient: true });

/* GET home page. */
router.get('/', function(req, res, next) {
  Orders.getOrders(function(err,orders){
  		if(err){
  			throw err;
  		}
  		res.json(orders);
  });
});
router.get('/:id', function(req, res, next) {
  Orders.getOrdersByUserId(req.params.id,function(err,orders){
  		if(err){
  			throw err;
  		}
  		res.json(orders);
  });
});


module.exports = router;
