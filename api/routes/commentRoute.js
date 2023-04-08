const express = require("express");
const router = express.Router();
const {AddComment} = require('../controller/commentController');
router.post("/add",AddComment );

module.exports=router;