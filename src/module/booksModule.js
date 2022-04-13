const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");


let bookSchema= new mongoose.Schema({
    bookName :
    {type : String,
     required : true},
     price : {
         indianPrice : Number,
         europeanPrice : Number
     },
    authorName : String,
    yearOfPublish : {
        type : Number,
        default : 2021
    },
        tag :[String],
        totalPages : Number,
        stockAvailable : Boolean
}, {timestamps : true})


module.exports = mongoose.model('books',bookSchema)