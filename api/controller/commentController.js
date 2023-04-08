const Comment = require('../model/Comment');
const Blog = require('../model/Blog');
const User = require('../model/User')

module.exports.AddComment=async(req,res)=>{

    try{

        const {blogId , userId , commentText}=req.body;

        const blog = await Blog.findById(blogId);

        if(blog==undefined){

            return res.status(404).json({
                err:"Blog not found"
            })
        }

        const user = await User.findById(userId);
     

        const userObj = {
            user: userId,
            name: user.name,
            commentText 
        }



        blog.comments.push(userObj);
     
        blog.save()



        await Comment.create({

            blogId,
            userId,
            commentText

        }).then((comment)=>{

            return res.status(200).json({
                message:"User comment created successfully",
                comment
            })


        }).catch((err)=>{

            return res.status(400).json({
                message:"Cannot create the comment schema",
                err
            })

        })

       

    }catch(err){

        console.error(err);
        return res.status(500).json({
            message:"Internal Server Error",
            error:err
        })
        

    }
}