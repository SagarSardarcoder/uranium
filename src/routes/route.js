const express = require('express');
const logger = require('../logger/logger')
const delhi = require('../util/helper')
const banglore = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
   logger.logging();
});

router.get('/test-me2', function (req, res) {
    delhi.exp1;
    delhi.exp2;
    delhi.exp3;
});


router.get('/test-me3', function (req, res) {
   banglore.expo1;
   banglore.expo2;
   banglore.expo3;
});

router.get('/test-me4', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me5', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason