var express = require('express');
var router = express.Router();
var request = require('request');
var Products = require('../models/products_model');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
  Products.getProducts(function(err,products){
      if(err){
        throw err;
      }
      res.json(products);
  });

});

module.exports = router;
