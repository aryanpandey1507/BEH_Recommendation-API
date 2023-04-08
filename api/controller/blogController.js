const Blog = require('../model/Blog');

module.exports.AddBlog=async(req,res)=>{

    try{

        const {userId , blogtext}=req.body;
        const blog = await Blog.create({

            userId,
            blogtext,
            

        })

        return res.status(200).json({
            message:"Blog Created Succesfully",
            blog
        })

    }catch(err){

        console.error(err);
        return res.status(500).json({
            message:"Internal Server Error",
            error:err
        })
        

    }
}