var express = require('express');
var router = express.Router();
var Orders = require('../models/orders_model');
var Contacts = require('../models/contacts_model');
var Products = require('../models/products_model');
var Favs = require('../models/favorites_model');
var Payments = require('../models/payments_model');
var Addresses = require('../models/addresses_model');
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/basket');
mongoose.connect('mongodb://feervalero:IAS343073@cluster0-shard-00-00-qvk6z.mongodb.net:27017,cluster0-shard-00-01-qvk6z.mongodb.net:27017,cluster0-shard-00-02-qvk6z.mongodb.net:27017/basket?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',{ useMongoClient: true });
/*API
	{
		"/contacts":{
			"/":getContacts, Ok
			"/:id":GetContactById Ok
		},
		"/orders":{
			"/":getOrders, Ok
			"/:id":GetOrdersById Ok
		},
		"/products":{
			"/":GetProducts Ok
		},
		"/favorites":{
			"/":getFavorites, ok
			"/:id":getFavoritesById ok
		},
		"/payments":{
			"/":getPayments, ok
			"/:id":getPaymentsById ok
		},
		"/addresses":{
			"/":getAddresses, ok
			"/:id":getAddressesById ok
		}	
	}
*/

router.get('/contacts', function(req, res, next) {
  Contacts.getContacts(function(err,orders){
  		if(err){
  			throw err;
  		}
  		res.json(orders);
  });
});

router.get('/contacts/:id', function(req, res, next) {
  Contacts.getContactById(req.params.id,function(err,orders){
  		if(err){
  			throw err;
  		}
  		res.json(orders);
  });
});

router.get('/orders', function(req, res, next) {
  Orders.getOrders(function(err,orders){
  		if(err){
  			throw err;
  		}
  		res.json(orders);
  });
});

router.get('/orders/:id', function(req, res, next) {
  Orders.getOrdersById(req.params.id,function(err,orders){
  		if(err){
  			throw err;
  		}
  		res.json(orders);
  });
});

router.get('/products', function(req, res, next) {
  Products.getProducts(function(err,orders){
  		if(err){
  			throw err;
  		}
  		res.json(orders);
  });
});

router.get('/favorites', function(req, res, next) {
  Favs.getFavorites(function(err,orders){
  		if(err){
  			throw err;
  		}
  		res.json(orders);
  });
});

router.get('/favorites/:id', function(req, res, next) {
  Favs.getFavoritesById(req.params.id,function(err,orders){
  		if(err){
  			throw err;
  		}
  		res.json(orders);
  });
});

router.get('/payments', function(req, res, next) {
  Payments.getPayments(function(err,data){
  		if(err){
  			throw err;
  		}
  		res.json(data);
  });
});

router.get('/payments/:id', function(req, res, next) {
  Payments.getPaymentsById(req.params.id,function(err,data){
  		if(err){
  			throw err;
  		}
  		res.json(data);
  });
});

router.get('/addresses', function(req, res, next) {
  Addresses.getAddresses(function(err,data){
  		if(err){
  			throw err;
  		}
  		res.json(data);
  });
});

router.get('/Addresses/:id', function(req, res, next) {
  Addresses.getAddressesById(req.params.id,function(err,data){
  		if(err){
  			throw err;
  		}
  		res.json(data);
  });
});




module.exports = router;