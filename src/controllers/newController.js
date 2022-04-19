const simpleFunction = async function(req,res,){
    res.send({msg:"This is the final function after middleware"})
}


module.exports.simpleFunction = simpleFunction