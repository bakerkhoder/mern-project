// import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/user.js"

export const signin=async(req,res)=>{
  const{email,password} = req.body
    try{  
        
    const existinguser= await User.findOne({email})
    
    if(!existinguser)  return res.status(404).json({message:"user does not exist"})
    const ispasswordcorrect=(password==existinguser.password)
    if(!ispasswordcorrect) return res.status(400).json({message:"invalid credentials"})
    const token=jwt.sign({email:existinguser.email,id:existinguser.id},'test',{expiresIn:"1h"})
    res.status(200).json({result:existinguser,token}) 
 }
   
    catch(error){


        res.status(500).json({message:"something went wwrong"})}
}
export const signup=async(req,res)=>{
    const{email,password,confirmpassword,firstname,lastname}=req.body
 try{ 

 const existinguser=await User.findOne({email})
 if(existinguser) return res.status(400).json({message:"already exist"})

 if(password!==confirmpassword) return res.status(400).json({message:"password does not match"})

//  const hashedpassword= bcrypt.hash(password,12)
//  console.log("jooohash")
 const result=await User.create({"email":email,"password":password,"name":`${firstname} ${lastname}`})

 const token=jwt.sign({email:result.email,id:result.id},'test',{expiresIn:"1h"})
 

 res.status(200).json({result,token}) 
 console.log(token)
 console.log(result)
} 
 catch(error){
  res.status(500).json({message:"something went wrong"})
 }
}
