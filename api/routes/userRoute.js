const express = require("express");
const router = express.Router();
const {AddUser , GetUserByLevel} = require('../controller/userController')

router.post("/add",AddUser );
router.get("/:userId/level/:levelno",GetUserByLevel)

module.exports=router;