import mongoose from "mongoose";
 const postschema=mongoose.Schema(
    {
        Title:String,
        Message:String,
        Creator:String,
        Tags:String,
        SelectedFile:String,
        createdAt:{
         type:Date,
         default:new Date()
        },
        likeCount:{
            type:Number,
            default:0
        },
    }
 );
 const PostMessage=mongoose.model('PostMessage',postschema);
 export default PostMessage;