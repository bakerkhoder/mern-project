import React from "react";
import { useSelector } from "react-redux";
import Post from "./post/post";
// import useStyles from "./styles"
const Posts=()=>{
    const posts=useSelector((state)=>state.posts);
    console.log(posts)
   
    // const classes = useStyles()
    return(
        <>
         <h2>posts</h2>
         <Post/>
    
        </>
    )   
}
export default Posts