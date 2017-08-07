/**
 * Created by valerof on 06/08/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var token="";
router.get('/', function(req,res){
    res.redirect("https://www.facebook.com/v2.10/dialog/oauth?client_id=260558091103716&redirect_uri=http://localhost:3000/fbauth/try&response_type=code");
});
router.get('/try', function(req,res){
    if(req.query.code){
        var code = req.query.code;
        request.get("https://graph.facebook.com/v2.10/oauth/access_token?client_id=260558091103716&redirect_uri=http://localhost:3000/fbauth/try&client_secret=53a84d85718da29b61e5ca74fdccb60a&code="+code,function(err,data){
            if(err){ throw err;}
            else {
                if(data.statusCode=="200") {
                    token = JSON.parse(data.body).access_token;
                    console.log(token);
                    res.json(token);
                }else if(data.statusCode=="400"){
                    res.redirect("https://www.facebook.com/v2.10/dialog/oauth?client_id=260558091103716&redirect_uri=http://localhost:3000/fbauth/try&response_type=code");
                }
            }
        });
    }else{
        res.send("try");
    }


});
router.get('/token', function(req,res){
    console.log(req);
    res.send("token");
});
module.exports = router;

/*
Invoque login dialog
 https://www.facebook.com/v2.10/dialog/oauth?
 client_id={app-id}
 &redirect_uri={redirect-uri}
* */

/*This page gets the access_token opening fbauth and redirects you to fbauth/try*/