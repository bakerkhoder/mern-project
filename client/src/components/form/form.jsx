import React from "react";
import { TextField,Button,Typography, Paper } from "@material-ui/core"; 
import { useState } from "react";
import useStyles from "./style"
import FileBase from "react-file-base64"
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form=()=>{
 
     const [postData,setPostData]=useState({
       Creator:'',Title:'',Message:'',Tags:'',SelectedFile:''
    })
     const classes = useStyles()
    
     const dispatch=useDispatch()      
       const handleSubmit=(e)=>{
       e.preventDefault()
       dispatch(createPost(postData))
    }
    const Clear =()=>{

    }
    return(
       <Paper className={classes.Paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6"> creating a memory</Typography>
            <TextField name="Creator" variant="outlined" label="Creator" fullWidth value={postData.creator}
             onChange={(e)=> setPostData({...postData,Creator:e.target.value})}/>
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