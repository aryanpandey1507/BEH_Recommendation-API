# BEH_Recommendation-API
**The API consists of the following endpoints-**  
**POST--** /user/add -> Creates a new **user**  

**POST--** /blog/add -> Creates a new **blog** from a user  

**POST--** /comment/add -> Creates a new **comment** on the existing blog from any of the user  

<u>**GET--**</u> /user/:userid/level/:levelno -> Fetches the friends of the user having the given **:userid** who are of a certain level.**(Like Linkedin Recommendation System)**

<u>Tech Stack</u>  -> **NodeJs , MongoDB**  


<u>**Schema Design**</u>




**For fetching the friends of the entered user at every level **

```

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

```
