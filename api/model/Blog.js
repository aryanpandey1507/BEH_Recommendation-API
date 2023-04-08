const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  userId:  
         { type: mongoose.Schema.ObjectId,
           ref:"User",
           required: true },

  blogtext: { type: String },
  comments:
  [
    {
        user:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
            required:true
       },
        name:{                                                      
            type:String,
            required:true,
        },
        commentText:{                                                      
            type:String,
            required:true,
        }
    }

  ]
});

module.exports = mongoose.model("Blog", BlogSchema);
