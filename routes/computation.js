var express = require('express');
var router = express.Router();
let x = Math.floor(Math.random());
ley y
/* GET home page.. */
router.get('/',function(req,res,next){
    if (req.query.x!=undefined)
    {
        x=req.query.x;

    }
    let g=Math.fround(x);
    let f= Math.random(x);
    let k= Math.round(x);


    res.render('computation', {x:x, fround:g, random:f, round:k});

});
module.exports=router;
