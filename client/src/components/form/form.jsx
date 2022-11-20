import React from "react";
import { TextField,Button,Typography, Paper } from "@material-ui/core"; 
import { useState,useEffect } from "react";
import useStyles from "./style"
import FileBase from "react-file-base64"
import { useDispatch,useSelector } from "react-redux";
import { createPost,updatePost } from "../../actions/posts";

const Form=({currentId, setCurrentId})=>{
   
     const [postData,setPostData]=useState({Title:'',Message:'',Tags:'',SelectedFile:''})//craetor emoved to an id
     const post=useSelector((state)=>currentId?state.posts.find((p)=>p._id ===currentId):null);
     const classes = useStyles()
    
     const dispatch=useDispatch()  
     const user =JSON.parse(localStorage.getItem('profile'))

     useEffect(()=>{if(post) setPostData(post)},[post])

       const handleSubmit=(e)=>{
       e.preventDefault()
       if(currentId){
       dispatch(updatePost(currentId,{...postData,name:user?.result?.name}))}
       else{
         dispatch(createPost({...postData,name:user?.result?.name}))
       }
       Clear()
    }
    const Clear =()=>{
    setCurrentId(null)
    setPostData({Title:'',Message:'',Tags:'',SelectedFile:''})}//here as we
   if(!user?.result?.name){
    //console.log(user)
      return(
        <Paper className="classes.paper">
           <Typography variant="h6" align="center" >
             Please SignIN to craete your own memories and like other memories
           </Typography>
        </Paper>
      )
    }
    
    return(
       <Paper className={classes.Paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId?'Editing':'Creating a Memory'}</Typography>
            {/* <TextField name="Creator" variant="outlined" label="Creator" fullWidth value={postData.Creator}
             onChange={(e)=> setPostData({...postData,Creator:e.target.value})}/> */}
             <TextField name="Title" variant="outlined" label="Title" fullWidth value={postData.Title}
             onChange={(e)=> setPostData({...postData,Title:e.target.value})}/>
             <TextField name="Message" variant="outlined" label="Message" fullWidth value={postData.Message}
             onChange={(e)=> setPostData({...postData,Message:e.target.value})}/>
             <TextField name="Tags" variant="outlined" label="Tags" fullWidth value={postData.Tags}
             onChange={(e)=> setPostData({...postData,Tags:e.target.value})}/>
             <div className={classes.fileInput}>
                 <FileBase type="file" multiple={false} onDone={({base64})=> setPostData({...postData,SelectedFile: base64})} />
             </div>
             <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
             <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={Clear} fullWidth>Clear</Button>

           </form>
       </Paper>
    )
}
export default Form