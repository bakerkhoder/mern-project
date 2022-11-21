import PostMessage from "../models/postMessage.js"
import mongoose from "mongoose";


export const getPost= async (req,res)=>{
  const{id}=req.params
  try{
    console.log(id)
    const post =await PostMessage.findById(id)
    res.status(200).json(post)
  }
  catch(error){
    res.status(404).json({message:error.message})
  }
}







export const getposts=async  (req,res)=>{
      const {page}=req.query

  try{
    console.log("fet")
    const LIMIT =8
    const startIndex=(Number(page) -1) *LIMIT//GET THE STARTING INDEX OF EVERY PAGE
    const total =await PostMessage.countDocuments({})
    const posts= await PostMessage.find().limit(LIMIT).skip(startIndex)
    res.status(200).json({data:posts,currentPage:Number(page),numberOfPages:Math.ceil(total/LIMIT)})
    
  }
  catch(error){
   res.status(404).json({message:error.message})
  }
}

export const getPostsBySearch=async(req,res)=>{
  const {searchQuery, tags}=req.query
  try{
   //const  title=new   RegExp(searchQuery,'i')
  // it need to be fixed
   const posts =await PostMessage.find({$or: [{Title:searchQuery},{Tags:[tags]}]})
   res.json({data:posts})
  }
  catch(error){
    res.status(404).json({message:error.message})
    console.log(error)
  }
}


export const createPost= async(req,res)=>{
  const post=req.body;
const newPostMessage=new PostMessage({...post,  Creator:req.userid,CreatedAt:new Date().toISOString})
    try { 
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
   var arr= post.likes.filter(ids => ids !== req.userid)
    post.likes=arr
  }
  const updatedPost= await PostMessage.findByIdAndUpdate(id,post,{new:true})
  res.json(updatedPost)
}


export const commentPost= async(req,res)=>{
  const {id}=req.params
  const {value}=req.body

  const post = await PostMessage.findById(id)
  post.comments.push(value)
  const updatedPost= await PostMessage.findByIdAndUpdate(id,post,{new:true})
  res.json(updatedPost)

}