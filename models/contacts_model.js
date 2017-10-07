var mongoose = require('mongoose');

var contacts_schema = mongoose.Schema({
    first_name:{type:String},
    middle_name:{type:String},
    last_name:{type:String},
    country:{type:String},
    state:{type:String},
    city:{type:String},
    neigh:{type:String},
    postal_code:{type:String},
    street_number:{type:String},
    email:{type:String},
    phone:{type:String},
    age:{type:String},
    genre:{type:String},
});

var contact = module.exports = mongoose.model('contacts',contacts_schema);

module.exports.getContacts = function(callback,limit){
	contact.find(callback).limit(limit);
}
module.exports.getContactById = function(id,callback){
	contact.findOne({contact:id},callback);
}
module.exports.searchByEmail = function(id,callback){
	contact.findOne({email:id},callback);
}
module.exports.getContactByEmail = function(id,callback){
	contact.findOne({email:id},callback);
}
module.exports.addContact = function(user,callback){
	contact.create(user,callback);
}
