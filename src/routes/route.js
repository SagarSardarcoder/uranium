const express = require('express');
const logger = require('../logger/logger')
const delhi = require('../util/helper')
const banglore = require('../validator/formatter')
const lodash = require('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
   logger.logging();
   delhi.exp1();
   delhi.exp2();
   delhi.exp3();
   banglore.expo1();
   banglore.expo2();
   banglore.expo3();
   res.send("this my 1st api")
});

router.get('/Hello', function (req, res) {
    // prblm 1
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    let result = lodash.chunk(months, 3)
    console.log('The result after splitting the months array is ', result)
    // prbl 2
    let oddNum = [1,3,5,7,9,11,13,15,17,19]
    console.log('The last 9 odd numbers in the array are: ', lodash.tail(oddNum))
    // peblm 3
    let a = [1 , 2, 1, 4]
    let b = [2, 3, 4, 3]
    let c = [6, 1, 5, 10]
    let d = [1, 1, 1]
    let e = [1, 2, 3, 4, 5]
    
    console.log('Final array or unique numbers is : ', lodash.union(a, b, c, d, e))
    // prblm 4
    let arrays = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log('The object created from arrays is :', lodash.fromPairs(arrays))
        res.send('My hello api!')
    });
    router.get('/test-me3', function (req, res) {
  
   res.send("this my 1st api")
});

router.get('/test-me4', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me5', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason