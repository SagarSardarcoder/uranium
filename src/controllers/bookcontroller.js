const bookController = require("../module/booksModule");
const authorController = require("../module/authorModule")

let saveBooks = async function(req,res){

    let booksData = req.body;
    let saveBooksData = await bookController.create(booksData);
    res.send({msg : saveBooksData})
    
    }
let ChetanBhagat = async function(req,res){

    let authorname = "Chetan Bhagat"
    let saveBooksData = await authorController.find({author_name:authorname});
    let id =saveBooksData[0].author_id
    let result = await bookController.find({author_id:id}).select({name:1,author_id:1,_id:0})
    res.send({msg : result})
    
    }
let Twostates = async function(req,res){
     const book = await bookController.find({name:"Two states"});
     let id = book[0].author_id;
     let authorname = await authorController.find({author_id:id}).select({author_name:1,_id:0});

     let bookname = book[0].name;
     let price = await bookController.findOneAndUpdate({name:bookname},{price:100},{new:true}).select({price:1,_id:0})
     res.send({msg:authorname,price})
  
    }
let authorName = async function(req,res){
    let books = await bookController.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    let id = books.map(x => x.author_id)

    let list =[];
    for(let i=0;i<id.length;i++){
        let ab =id[i]
        let author = await authorController.find({author_id:ab}).select({author_name:1,_id:0})
        list.push(author)
    }let authorName =list.flat()
     res.send({msg:authorName})
  
    }


    
  
    
       
    module.exports.saveBooks = saveBooks;
   module.exports.ChetanBhagat= ChetanBhagat;
     module.exports.Twostates = Twostates;
     module.exports.authorName = authorName;
    
    