const authorcontroller = require("../module/authorModule")
let saveAuthor = async function(req,res){

    let booksData = req.body;
    let saveBooksData = await authorcontroller.create(booksData);
    res.send({msg : saveBooksData})
    
    }
    module.exports.saveAuthor =saveAuthor;