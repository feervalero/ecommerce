var mongoose = require('mongoose');

var payments_model = mongoose.Schema({
    orderid :{type:String,required:true},
    contactid :{type:String,required:true},
    payment_type :{type:String,required:true},
    credit_card :{type:String,required:true},
    amount :{type:String,required:true},
    status :{type:String,required:true}
    
}); 

var payment = module.exports = mongoose.model('payments',payments_model);

module.exports.getPayments = function(callback,limit){
    payment.find(callback).limit(limit);
}

module.exports.getPaymentsById = function(id,callback){
    payment.find({contactid:id},callback);
}
