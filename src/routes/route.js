const express = require('express');
const router = express.Router();

const booksControllers = require("../controllers/bookcontroller")


router.post("/creatBooks" ,booksControllers.saveBooks);

router.get("/booksList" , booksControllers.listOfBooks);

router.get("/getBooksInYear" , booksControllers.getBooksInYear);

router.post("/getParticularBooks" , booksControllers.getParticularBooks);

router.get("/getXINRBooks" , booksControllers.getXINRBooks);

router.get("/getRandomBooks" , booksControllers.getRandomBooks)



module.exports = router;
