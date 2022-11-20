import React ,{useState,useRef}from 'react'
import { Typography,TextField,Button } from "@material-ui/core"
import { useDispatch } from 'react-redux'
import useStyles from './styles'
import {commentPost} from "../../actions/posts"
const CommentSection = ({post}) => {
    const user =JSON.parse(localStorage.getItem('profile'))

    const classes=useStyles()
    const dispatch =useDispatch()
    const [comments,setComments]=useState([1,2,3,4])
    const[comment,setComment]=useState('')
    const handleClick=()=>{
        const finalComment=`${user.result.name}:${comment}`
        dispatch(commentPost(finalComment,post._id))
    }
    return (
      <div>
        <div className={classes.commentsOuterContainer}>
           <div className={classes.commentsInnerContainer}>
              <Typography gutterBottom variant='h6'>Comments</Typography>
              {comments.map((c,i)=>(
                <Typography key={i} gutterBottom variant='subtitle1'>
                    Comment{i}
                </Typography>
              ))}
           </div>
           {user?.result?.name &&(
             <div style={{width:'70%'}}>
              <Typography gutterBottom variant='h6'>Write a Comment</Typography>
              <TextField
                fullWidth
                rows={4}
                variant="outlined"
                label="comment"
                multiline
                value={comment}
                onChange={(e)=> setComment(e.target.value)}
              />
             <Button style={{marginTop:'10px'} }fullWidth disabled={!comment} color="primary" variant="contained" onClick={handleClick} >
                comment
             </Button>

           </div>
           )}
          
        </div>
      </div>
    )
}

export default CommentSection
