const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorcontroller")
const publisherControllers = require("../controllers/publishercontroller")
const booksControllers = require("../controllers/bookcontroller")



router.post("/creatAuthor" ,authorController.createAuthor);
router.post("/createPublisher" ,publisherControllers.createPublisher);
router.post("/creatBooks" ,booksControllers.createBooks);
router.post("/bookDetails" ,booksControllers.bookDetails);
router.put("/updateByPublisher" ,booksControllers.updateByPublisher);
router.put("/updateByRating" ,booksControllers.updateByRating);





module.exports = router;
