
const publisherController = require('../module/publisherModule');

let createPublisher = async function(req,res){
    let data = req.body
    let publisher = await publisherController.create(data)
    res.send({msg:publisher})
} 
module.exports.createPublisher =createPublisher