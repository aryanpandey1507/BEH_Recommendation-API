const express = require("express");
const router = express.Router();
const {AddBlog} = require('../controller/blogController');
router.post("/add",AddBlog );

module.exports=router;