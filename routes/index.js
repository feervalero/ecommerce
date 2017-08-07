var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  var token = req.query.access_token;
  if(token){
        global.IsLogged = true;
        request.get("https://graph.facebook.com/v2.5/me?fields=id,name,picture&access_token="+token,function(err,data){
          if(err){throw err;}
          else{
            if(data.statusCode="200") //Si paso
            {
                res.render('index', { title: 'Express',logged: global.IsLogged,username:JSON.parse(data.body).name});
            }
            else//necesita logeo nuevamente
            {
              global.IsLogged = false;
              res.render('index', { title: 'Express',logged: global.IsLogged});
            }


          }
        });
  }else{
      global.IsLogged=false;
      res.render('index', { title: 'Express',logged: global.IsLogged});
  }

});

module.exports = router;
