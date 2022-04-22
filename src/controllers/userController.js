const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const user = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data);
      return res.status(201).send({ msg: savedData })
    } else {
      return res.status(400).send({ msg: "BAD REQUEST" })
    }
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;
  try {
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(404).send({
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
    res.status(201).send({ status: true, data: token });
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
};

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(404).send({ status: false, msg: "No such user exists" });

    res.status(200).send({ status: true, data: userDetails })
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
};

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userData = req.body;

    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(200).send({ status: true, data: updatedUser })
  } catch (err) {
    res.status(500).send({ error: err })
  }
};

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId

    let deletion = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
    res.status(200).send({ data: deletion })
  } catch (err) {
    res.status(500).send({ error: err.message })
  }

}

module.exports.user = user;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
