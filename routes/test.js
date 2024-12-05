const userrouter = require("express").Router();

userrouter.get('/',function(req,res){
    console.log("test router hittt");
    //res.send(123123);
});

module.exports = userrouter;