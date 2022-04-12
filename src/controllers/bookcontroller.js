const bookController = require("../module/booksModule");


let saveBooks = async function(req,res){

let booksData = req.body;
let saveBooksData = await bookController.create(booksData);
res.send({msg : "Book data saved successful"})

}

let listOfBooks = async function(req,res){
    let listOfBooksData = await bookController.find();
    res.send({msg : listOfBooksData})
}


module.exports.saveBooks = saveBooks;
module.exports.listOfBooks = listOfBooks;