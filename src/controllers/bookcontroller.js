const bookController = require("../module/booksModule");

let saveBooks = async function(req,res){

    let booksData = req.body;
    let saveBooksData = await bookController.create(booksData);
    res.send({msg : saveBooksData})
    
    }
    
    let listOfBooks = async function(req,res){
        let listOfBooksData = await bookController.find().select( { bookName: 1 , authorName : 1, _id :0})
        res.send({msg : listOfBooksData})
    }
    let getBooksInYear = async function(req,res){
        
        let result = req.body.yearOfPublish
        let listOfBooksData = await bookController.find({yearOfPublish: result})
        res.send({msg : listOfBooksData})
    }
       let getParticularBooks = async function(req,res){
        let condition = req.body
    
        let listOfBooksData = await bookController.find(condition)
        res.send({msg : listOfBooksData})
    }
       let getXINRBooks = async function(req,res){
    
        let listOfBooksData = await bookController.find(
            {'price.indianPrice': {$in:[100,200,500]}}
            )
        res.send({msg : listOfBooksData})
    }
    let getRandomBooks = async function(req,res){
    
        let listOfBooksData = await bookController.find({ $or : [{stockAvailable :true},{totalPages :{$gt:500}}]})
        res.send({msg : listOfBooksData})
    }
    
       
    module.exports.saveBooks = saveBooks;
    module.exports.listOfBooks = listOfBooks;
    module.exports.getBooksInYear = getBooksInYear;
    module.exports.getParticularBooks = getParticularBooks;
    module.exports.getXINRBooks = getXINRBooks;
    module.exports.getRandomBooks =getRandomBooks;
    