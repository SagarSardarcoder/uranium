const express = require('express');
const router = express.Router();
const middleware = require('../middleware/commonMiddleware')
const simple = require('../controllers/newController')



router.get("/mid1" ,middleware.firstMid,middleware.secondMid,simple.simpleFunction);






module.exports = router;
