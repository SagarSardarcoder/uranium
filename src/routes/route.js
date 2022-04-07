// const express = require('express');
// const logger = require('./logger')

// const router = express.Router();

router.get('/movies ', function (req, res) {
    const movielist = ["justice league", "the shining", "lord of the rings", "bartman begins","avengers"]
    const iterator = movielist.values();
    res.send(iterator)
});




module.exports = router;
// adding this comment for no reason