const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

let authorSchema= new mongoose.Schema(
    {    
        author_id:{type :Number,
                required:true},
        author_name:String,
        age:Number,
        address:String
    },{timestamps : true}
)

module.exports = mongoose.model('author',authorSchema)