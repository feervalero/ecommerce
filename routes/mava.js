var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next){
	res.render('mava',{title:"Mava"});
});

module.exports = router;