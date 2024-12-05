const npostRouter = require("express").Router();

npostRouter.get('/npost',function(req,res){
    console.log("post test router hittt");
    //res.send(123123);
});

npostRouter.post('/npost',function(req,res){
    console.log("post  test router hittt");
    //res.send(123123);
});


module.exports = npostRouter;