const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");


let bookSchema= new mongoose.Schema(
    { 
        name:String,
        author_id:Number,
        price:Number,
        ratings:Number,
    }

, {timestamps : true})


module.exports = mongoose.model('books',bookSchema)