const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");


let bookSchema= new mongoose.Schema({
    bookName :
    {type : String,
     required : true},   
    authorName : String,
    category : String,
    yearOfPublish : Number
}, {timestamps : true})

module.exports = mongoose.model('books',bookSchema)