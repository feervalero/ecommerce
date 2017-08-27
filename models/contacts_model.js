var mongoose = require('mongoose');

var contacts_schema = mongoose.Schema({
	contact:{type:String,required:true},
	first_name:{type:String,required:true},
	last_name:{type:String,required:true},
	fb_id:{type:String,required:true},
	start_date:{type:String,required:true},
	status:{type:String,required:true},
	img_url:{type:String,required:true},
	addresses:{type:Object},
	lists:{
		type:Object
	},
	created_date:{type:Date,default:Date.now}
});

var contact = module.exports = mongoose.model('contacts',contacts_schema);

module.exports.getContacts = function(callback,limit){
	contact.find(callback).limit(limit);
}
module.exports.getContactById = function(id,callback){
	contact.findOne({contact:id},callback);
}
module.exports.addUser = function(user,callback){
	contact.create(user,callback);
}
