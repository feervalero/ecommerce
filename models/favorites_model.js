var mongoose = require('mongoose');

var favorites_model = mongoose.Schema({
    contact :{type:String,required:true},
    sku :{type:String,required:true},
    display_name :{type:String,required:true},
    price :{type:String,required:true},
    inventory :{type:String,required:true},
    new :{type:String,required:true}
    
}); 

var favorite = module.exports = mongoose.model('favorites',favorites_model);

module.exports.getFavorites = function(callback,limit){
    favorite.find(callback).limit(limit);
}

module.exports.getFavoritesById = function(id,callback){
    favorite.find({contact:id},callback);
}
