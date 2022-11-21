import React ,{useState,useRef}from 'react'
import { Typography,TextField,Button, useRadioGroup } from "@material-ui/core"
import { useDispatch } from 'react-redux'
import useStyles from './styles'
import {commentPost} from "../../actions/posts"
const CommentSection = ({post}) => {
    const user =JSON.parse(localStorage.getItem('profile'))

    const classes=useStyles()
    const dispatch =useDispatch()
    const commentsRef=useRef()
    const [comments,setComments]=useState(post?.comments)
    const[comment,setComment]=useState('')
    const handleClick= async ()=>{
        const finalComment=`${user.result.name}:${comment}`
        const newComments= await  dispatch(commentPost(finalComment,post._id))
        console.log(comments)
        setComments(newComments)
        setComment('')
        commentsRef.current.scrollIntoView({ behavior :"smooth"})
    }
    return (
      <div>
      
        <div className={classes.commentsOuterContainer}>
           <div className={classes.commentsInnerContainer}>
              <Typography gutterBottom variant='h6'>Comments</Typography>
              {comments.map((c,i)=>(
                <Typography key={i} gutterBottom variant='subtitle1'>
                    <strong>{c.split(':')[0]}</strong>
                    &nbsp; {c.split(':')[1]}
                </Typography>
              ))}
              <div ref={commentsRef} />
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
