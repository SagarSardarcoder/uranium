const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/all-candidates', function (req, res) {
    
    // console.log(req)
    // console.log('------------------')
    // console.log('These are the request query parameters: ', req.query)
    // res.send('My first ever api!')
    const listOfCandidates = ["Ram","Hari","Rahul","rekha","jaya","susma","prit","rohit","rakesh","salman"];
     const ygy = [...listOfCandidates[3]]
     console.log(ygy)
    res.send(listOfCandidates)
});




module.exports = router;
// adding this comment for no reason