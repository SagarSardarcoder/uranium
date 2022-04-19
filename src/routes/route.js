const express = require('express');
const router = express.Router();
const batchController = require("../controllers/batchcontroller")
const developerControllers = require("../controllers/developercontroller")




router.post("/createbatch" ,batchController.createbatch);
router.post("/creatDeveloper" ,developerControllers.creatDeveloper);
router.get("/scholarshipDevelopers",developerControllers.scholarshipDevelopers );
router.get("/developers",developerControllers.developers );





module.exports = router;
