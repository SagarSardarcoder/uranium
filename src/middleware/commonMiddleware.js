let jwt = require("jsonwebtoken");

const middl = async function (req, res,next) {
  try{
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  let userId = req.params.userId

  if(!userId) return res.status(400).send({msg:"userId is mandatory field"})

  let user = await userModel.findById(userId);
  if (!user) return res.status(403).send("No such user exists"); 
  // console.log(userId)
  
  if (!token) return res.send({ status: false, msg: "token must be present" });
  let decodedToken = jwt.verify(token, "functionup-uranium")
  // console.log(decodedToken.userId)
  if(!decodedToken) return res.status(403).send({ status: false, msg: "token is invalid"})
  if(decodedToken.userId !== userId) return res.status(403).send({msg:"you are not autherised for this process"})
}catch(err){
  res.status(500).send({error:err.message})
}

next()
 
};








module.exports.middl=middl