const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

const middleware = require("../middleware/commonMiddleware.js")



router.post("/user", userController.user  )

router.post("/loginUser", userController.loginUser)

router.get("/users/:userId",middleware.middl, userController.getUserData)

router.put("/users/:userId",middleware.middl, userController.updateUser)

router.delete("/users/:userId",middleware.middl,userController.deleteUser)

module.exports = router;