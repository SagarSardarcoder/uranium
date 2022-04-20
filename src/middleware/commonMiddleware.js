const res = require("express/lib/response");

const checkHeader=(req,res,next)=>{
    let validation = req.headers.isfreeappuser
    // console.log(req.headers)
    if(validation){
    next ();
}
else {
    res.send({
        'msg':'The request is missing a mandatory header'

    });
}
}
module.exports.checkHeader=checkHeader 