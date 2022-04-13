const express = require('express');
const router = express.Router();

const booksControllers = require("../controllers/bookcontroller")
const authorController = require("../controllers/authorcontroller")

router.post("/creatBooks" ,booksControllers.saveBooks);
router.post("/creatAuthor" ,authorController.saveAuthor);
router.post("/ChetanBhagat" ,booksControllers.ChetanBhagat);
router.post("/Twostates" ,booksControllers.Twostates);
router.post("/authorName" ,booksControllers.authorName);




module.exports = router;
