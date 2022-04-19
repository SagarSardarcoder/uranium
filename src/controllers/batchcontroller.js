
const batchController = require('../model/batchModel');

let createbatch = async function(req,res){
    let data = req.body
    let batch = await batchController.create(data)
    res.send({msg:batch})
} 
module.exports.createbatch =createbatch 