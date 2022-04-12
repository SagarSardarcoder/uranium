const express = require('express');
const router = express.Router();

const booksControllers = require("../controllers/bookcontroller")


router.post("/creatBooks" ,booksControllers.saveBooks);

router.get("/booksList" , booksControllers.listOfBooks);



module.exports = router;
