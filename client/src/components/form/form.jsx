import React from "react";
import { TextField,Button,Typography, Paper } from "@material-ui/core"; 
import { useState } from "react";
import useStyles from "./style"
import FileBase from "react-file-base64"


const Form=()=>{
    const handleSubmit=()=>{

    }
    const Clear =()=>{

    }
     const [postData,setPostData]=useState({
       Creator:'',Title:'',Message:'',Tags:''
    })
     const classes = useStyles()
    return(
       <Paper className={classes.Paper}>
            <form autoComplete="off" noValidate className={classes.form} onsubmit={handleSubmit}>
            <Typography variant="h6"> creating a memory</Typography>
            <TextField name="Creator" variant="outlined" label="Creator" fullWidth value={postData.creator}
             onChange={(e)=> setPostData({...postData,creator:e.target.value})}/>
             <TextField name="Title" variant="outlined" label="Title" fullWidth value={postData.creator}
             onChange={(e)=> setPostData({...postData,Title:e.target.value})}/>
             <TextField name="Message" variant="outlined" label="Message" fullWidth value={postData.creator}
             onChange={(e)=> setPostData({...postData,Message:e.target.value})}/>
             <TextField name="Message" variant="outlined" label="Message" fullWidth value={postData.creator}
             onChange={(e)=> setPostData({...postData,Message:e.target.value})}/>
             <div className={classes.fileInput}>
                 <FileBase type="file" multiple={false} onDone={({base64})=> setPostData({...postData,selectedFile: base64})} />
             </div>
             <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
             <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={Clear} fullWidth>Clear</Button>

           </form>
       </Paper>
    )
}
export default Form