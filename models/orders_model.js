var mongoose = require('mongoose');

var orders_schema = mongoose.Schema({
	contactid:{type:String,required:true},
	items:{type:Array},
	stage:{type:String}

});

var order =  module.exports = mongoose.model('orders',orders_schema);

module.exports.getOrders = function(callback,limit){
	order.find(callback).limit(limit);
}
module.exports.getOrdersById = function(id,callback){
	order.find({contactid:id},callback).sort({created_date:-1});
}
module.exports.getOrderInStageById = function(id,stageid,callback){
	order.find({contactid:id,stage:stageid},callback);
}
module.exports.addOrder = function(ghj,callback){
	order.create(ghj,callback);
}
module.exports.deleteOrderWithStage = function(id,stageid,callback){
	order.deleteOne({contactid:id,stage:stageid},callback);
}

