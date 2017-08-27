var mongoose = require('mongoose');

var addresses_model = mongoose.Schema({
    contact:{type:String,required:true},
    Country:{type:String,required:true},
    State:{type:String,required:true},
    City:{type:String,required:true},
    Neighbourhood:{type:String,required:true},
    street_number:{type:String,required:true}
}); 

var address = module.exports = mongoose.model('addresses',addresses_model);

module.exports.getAddresses = function(callback,limit){
    address.find(callback).limit(limit);
}

module.exports.getAddressesById = function(id,callback){
    address.find({contact:id},callback);
}
