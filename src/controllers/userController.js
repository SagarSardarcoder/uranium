const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const user = async function (req, res) {
 
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
   let userName = req.body.emailId;
   let password = req.body.password;

   let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or password is not correct",
    });

     let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "uranium",
      organisation: "FUnctionUp",
      myName: "Sagar"
    },
    "functionup-uranium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {
  let token = req.headers["x-auth-token"];
 
  let decodedToken = jwt.verify(token, "functionup-uranium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.send({ status: true, data: updatedUser });
};

const deleteUser = async function(req ,res){

   let userId = req.params.userId
   let deletion = await userModel.findOneAndUpdate({_id:userId},{isDeleted:true},{new:true})
   res.send({data:deletion})

}

module.exports.user =user;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
