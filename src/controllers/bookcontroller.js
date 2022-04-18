const bookModel = require("../module/booksModule");
const authorModel = require("../module/authorModule");
const publisherModel = require("../module/publisherModule")
const mongoose = require('mongoose')
const isValidObjectId = function (ObjectId) {
   return mongoose.Types.ObjectId.isValid(ObjectId)
       }

let createBooks =async function(req,res){
 let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

 if(!authorId)
            return res.send({msg:"author ID is required "});

  if(!isValidObjectId(authorId)){
            return res.send({msg:"invalid autherId"})
         }
  if(!publisherId) 
           return res.send({msg:"publisher ID is required"});

  if(!isValidObjectId(publisherId)){
            return res.send({msg:"invalid publisherId"})
         }

      let addBook = await bookModel.create(book);
         res.send({msg:addBook})
}
const bookDetails= async function (req, res) {
    let books = await bookModel.find().populate("author publisher") 
    res.send({data: books})
}
 
const updateByPublisher = async function (req,res){
   const pub = await publisherModel.find({$and: [{PublisherName:"Penguin"},{PublisherName:"HarperCollins"}]}).select({_id:1})
   // console.log(pub)
   for(let i =0; i<pub.length; i++){
        await bookModel.updateMany({publisher: pub[i]._id}, {isHardCover: true}) 
   } 
   res.send({msg:"done"})
}
const updateByRating = async function (req,res){
   const auth = await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
   //  console.log(auth)
   for(let i =0; i<auth.length; i++){
     
        await bookModel.updateMany({author: auth[i]._id}, { $inc: {price:10}})
   } 
   res.send({msg:"done"})
}




module.exports = {
   createBooks,
   bookDetails,
   updateByPublisher,
   updateByRating
}
 
    
    