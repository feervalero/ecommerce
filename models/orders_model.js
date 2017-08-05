var mongoose = require('mongoose');

var orders_schema = mongoose.Schema({
	contact:{type:String,required:true},
	created_date:{type:String,required:true},
	stage:{type:String,required:true},
	status:{type:String,required:true},
	products:{
		sku:{type:String,required:true},
		quantity:{type:String,required:true},
		name:{type:String,required:true},
		price:{type:String,required:true},
		price_discount:{type:String,required:true}
	},
	shipping_address:{
		type:Object
	},
	total:{type:String,required:true},
	total_extra:{
		taxes:{type:String,required:true},
		freight:{type:String,required:true}
	},
	payments:{
		payment_type:{type:String,required:true},
		credit_card:{type:String,required:true},
		amount:{type:String,required:true},
		status:{type:String,required:true}
	}
});

var order =  module.exports = mongoose.model('orders',orders_schema);

module.exports.getOrders = function(callback,limit){
	order.find(callback).limit(limit);
}
module.exports.getOrdersByUserId = function(id,callback){
	order.find({contact:id},callback).sort({created_date:-1});
}
