const firstMid = async function(req,res,next){
    console.log("this is the first middleware")
    next()
   
}
const secondMid = async function(req,res,next){
    console.log("this is the second middleware")
    next()
  
}






module.exports= {
    firstMid,
    secondMid
}