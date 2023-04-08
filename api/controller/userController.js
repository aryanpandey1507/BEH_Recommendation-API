const User = require('../model/User');
const Blog = require('../model/Blog')
const Comment = require('../model/Comment')

module.exports.AddUser=async(req,res)=>{

    try{

        const {name , phoneNumber , email}=req.body;
        const user = await User.create({

            name,
            phoneNumber,
            email

        })

        return res.status(200).json({
            message:"User Created Succesfully",
            user
        })

    }catch(err){

        console.error(err);
        return res.status(500).json({
            message:"Internal Server Error",
            error:err
        })
        

    }
}

module.exports.GetUserByLevel=async(req,res)=>{
    
    try{

        var {userId, levelno} = req.params;
        const userDet = await User.findById(userId);

        
        var friends = new Set();
        friends.add(userDet);


        while(levelno--){

            for(let i of friends){
                
                
                let id = i._id;
                var blogsArray=[];
                const blogs = await Comment.find({userId:id}).select({blogId:1,_id:0});
            
                
                for(let i = 0 ; i < blogs.length ; i++){

                    blogsArray.push(blogs[i]);

                }
                
                
            }

            


            for(let i = 0 ; i < blogsArray.length ; i++){

                const BlogDetails=await Blog.findById(blogsArray[i].blogId);
                
                
                for(let j = 0 ; j <BlogDetails.comments.length;j++){
    
                    
                    const friend = await User.findById(BlogDetails.comments[j].user);
                    friends.add(friend)
    
                }
            }
            


        }
       
        
        friends.delete(userDet)
        var friendsArray = Array.from(friends)


        
        return res.status(400).json({
            message:  ` The level ${levelno} friends of the given user. `,
            friendsArray
        })



        

    }catch(err){

        console.error(err);
        return res.status(500).json({
            message:"Internal Server Error",
            error:err
        })


    }
}