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
const newPostMessage=new PostMessage({...post,  Creator:req.userid,CreatedAt:new Date().toISOString})
    try { 
      // console.log(req.userid)
      await  newPostMessage.save();
        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({message: error.message });
    
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
 res.json({message:'post deleted successfully'})

}

export const likePost =async(req,res)=>{
  if(!req.userid) return res.json({message:"Unauthenticated"})
  const{id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(id))
  return res.status(404).send('no post with that id')
  const post= await PostMessage.findById(id)
 
  const index =post.likes.findIndex((id)=> id === String(req.userid))///hon jarib t7la 7et userid w red decoded data kamen hek
  if(index ==-1){
    post.likes.push(req.userid)
  }
  else{
//     function chechliked(id) {
//   return id!==String(req.userid);
// }


   var arr= post.likes.filter(ids => ids !== req.userid)
    post.likes=arr
  }
  
  const updatedPost= await PostMessage.findByIdAndUpdate(id,post,{new:true})
  res.json(updatedPost)
}