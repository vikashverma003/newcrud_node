const ncommentRouter = require("express").Router();

ncommentRouter.get('/ncomment',function(req,res){
    console.log("comment test router hittt");
    //res.send(123123);
});

ncommentRouter.post('/ncomment',function(req,res){
    console.log("comment  test router hittt");
    //res.send(123123);
});


module.exports = ncommentRouter;