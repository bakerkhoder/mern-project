import { useEffect } from "react"
import React from 'react'
import { Paper,Typography,CircularProgress,Divider } from "@material-ui/core"
import { useDispatch,useSelector } from "react-redux"
import moment from "moment"
import { useParams,useHistory } from "react-router-dom"
import useStyles from './styles'

import {getPost} from '../../actions/posts'

const PostDetails = () => {
  const {post,posts,isLoading}=useSelector((state)=>state.posts)
  const dispatch=useDispatch()
  const history=useHistory()
  const classes=useStyles()
  const id=useParams()

  useEffect(()=>{
   dispatch(getPost(id))
  },[id])

 if(!posts) return null
 if(isLoading){
  return <Paper elevation={6} className={classes.loadingPaper}>
    <CircularProgress size="7em"/>

  </Paper>
 }

  return (
    <Paper style={{padding:'20px',borderRadius:'15px'}} elevation={6}>
   <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{posts.Title}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{posts.Tags}</Typography>
          <Typography gutterBottom variant="body1" component="p">{posts.message}</Typography>
          <Typography variant="h6">Created by: {posts.name}</Typography>
          <Typography variant="body1">{moment(posts.CreatedAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={posts.SelectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={posts.Title} />
        </div>
      </div>
      </Paper>
  )
}

export default PostDetails
