import mongoose from "mongoose";
 const postschema=mongoose.Schema(
    {
        title:String,
        message:String,
        name:String,
        creator:String,
        tags:[String],
        selectedFile:String,
        likes:{
            type:[String],
            default:[],
        },
        createdAt:{
         type:Date,
         default:new Date()
        },
    }
 );
 const PostMessage=mongoose.model('PostMessage',postschema);
 export default PostMessage;