import  jwt ,{decode}from "jsonwebtoken";
const auth=async (req,res,next)=>{
    try{
        //  console.log(req.headers)
       const token=req.headers.authorization.split(" ")[1]
       const isCustomAuth=token.length<500
       let decodedata
       if(token&&isCustomAuth){
        decodedata=jwt.verify(token,'test')
         req.userid=decodedata?.id
        // console.log("mn hon")
        // console.log(decodedata)//hooooon jarib iat
        // console.log("lahon")
       }
       else{
        decodedata=jwt.decode(token)
        req.userid=decodedata?.sub
       
       }
       next()
    }
    catch(error){
        console.log("error")
        console.log(error)
    }
}
export default auth