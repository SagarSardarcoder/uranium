const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const productController= require("../controllers/productController")
const middleware = require('../middleware/commonMiddleware')


router.post("/createProduct", productController.createProduct);
router.post("/createUser",middleware.checkHeader,UserController.createUser);
router.post("/orderPurchease",middleware.checkHeader,orderController.createOrder);





 




module.exports = router; 