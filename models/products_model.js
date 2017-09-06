var mongoose = require('mongoose');

var products_schema = mongoose.Schema({
	sku:{type:String,required:true},
	display_name:{type:String,required:true},
	price:{type:String,required:true},
	inventory:{type:String,required:true},
	new:{type:String,required:true}
});

var product =  module.exports = mongoose.model('products',products_schema);

module.exports.getProducts = function(callback,limit){
	product.find(callback).limit(limit);
}


module.exports.getProductById = function(id,callback){
	product.find({sku:id},callback);
}

