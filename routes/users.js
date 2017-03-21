var express = require('express');
var router = express.Router();
let User=require('../schemas/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
    User.find(function (err,resp) {
        if(err){
          console.log('Error')
        }else{
          console.log(resp)
            res.json(resp);
        }
    });
});

module.exports = router;
