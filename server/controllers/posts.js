import PostMessage from "../models/postMessage.js"
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