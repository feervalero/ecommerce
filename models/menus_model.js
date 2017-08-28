var mongoose = require('mongoose');

var menus_schema = mongoose.Schema({
    id:{type:String,required:true},
    parent:{type:String,required:true},
    displayname:{type:String,required:true},
    submenu:{type:{menus_schema}}
});

var menu = module.exports = mongoose.model('menus',menus_schema);

module.exports.getMenus = function(callback){
    menu.find(callback);
}