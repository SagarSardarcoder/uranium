const batchModel = require("../model/batchModel");
const developerModel = require("../model/developerModel");

let creatDeveloper =async function(req,res){
 let data = req.body
 let developer = await developerModel.create(data)
 res.send(developer)
}

let scholarshipDevelopers =async function(req,res){
 
 let developer = await developerModel.find({$and:[{gender:"female"},{percentage:{$gte:70}}]})
 res.send(developer)
}

let developers =async function(req,res){
  let percent = req.query.percentage;
  let program = req.query.program;

  let batch = await batchModel.findOne({name:program}).select({_id:1}) 
  let developer = await developerModel.find({$and:[{batch:batch._id},{percentage:{$gte:percent}}]})
  res.send({msg:developer})
}




module.exports = {
   creatDeveloper,
   scholarshipDevelopers,
   developers
}
 
    
    