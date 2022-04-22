let jwt = require("jsonwebtoken");

const middl = async function (req, res,next) {
  let token = req.headers["x-Auth-token"];
  let userId = req.params.userId
  // console.log(userId)
  if (!token) token = req.headers["x-auth-token"];
  
  if (!token) return res.send({ status: false, msg: "token must be present" });
  let decodedToken = jwt.verify(token, "functionup-uranium")
  // console.log(decodedToken.userId)
  if(!decodedToken) return res.send({ status: false, msg: "token is invalid"})
  if(decodedToken.userId !== userId) return res.send({msg:"you are not autherised for this process"})

next()
 
};








module.exports.middl=middl