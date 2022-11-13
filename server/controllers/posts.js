import PostMessage from "../models/postMessage.js"
import mongoose from "mongoose";
export const getposts=async  (req,res)=>{
  try{
    const PostMessages= await PostMessage.find()

    res.status(200).json(PostMessages)
  }
  catch(error){
   res.status(404).json({message:error.message})
  }
}

export const createPost= async(req,res)=>{
  const post=req.body;
//   console.log(req)
const newPostMessage=new PostMessage(post)
    try { 
      await  newPostMessage.save((err,doc)=>
        console.log("saved"));
      
        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({message: error.message });
        console.log("ma3 eno saved bas hek")
    
    }
}


export const updatedPost=async(req,res)=>{
   const{id:_id}=req.params;
   const post=req.body
   if(!mongoose.Types.ObjectId.isValid(_id))
   return res.status(404).send('no post with that id ')
   const updatedpost= await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true})
   res.json(updatedpost)
}


export const deletePost=async(req,res)=>{
 const {id}=req.params;
 if(!mongoose.Types.ObjectId.isValid(id)) 
 return res.status(404).send('no post wuth that id') 
 await PostMessage.findByIdAndRemove(id);
 console.log('delete')
 res.json({message:'post deleted successfully'})

}

export const likePost =async(req,res)=>{
  const{id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(id))
  return res.status(404).send('no post with that id')
  const post= await PostMessage.findById(id)

  const updatedPost= await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true})
  res.json(updatedPost)
}