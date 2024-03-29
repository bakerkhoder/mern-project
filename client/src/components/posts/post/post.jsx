import React from "react";
import { useState } from "react";
import useStyles from "./styles"
import {Card,CardActions,CardMedia,Button,Typography,CardContent,ButtonBase} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import moment from 'moment'
import { useDispatch } from "react-redux";
import { deletePost,likePost} from "../../../actions/posts";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined"
import { useHistory } from "react-router-dom";

// 7el esset licon jiba de8ri w 7eta bfile asssests
const Post=({post,setCurrentId})=>{
    const classes = useStyles()
    const distpatch=useDispatch()
    const history =useHistory()
    const [likes, setLikes]=useState(post?.likes)
    const user =JSON.parse(localStorage.getItem('profile'))
    //  console.log(likes.find((like)=>like ===(user?.result?.googleId || user?.result?._id)))
  //    function refreshPage() {
  //   window.location.reload(false);
  const hasLikedPost= likes.find((like)=>like ===(user?.result?.googleId || user?.result?._id))
  const handleLike= async ()=>{
    distpatch(likePost(post._id))
    if(hasLikedPost){
      setLikes(likes.filter((id)=>id!==(user?.result?._id)))
    }else{
      setLikes([...likes,(user?.result?.googleId || user?.result?._id)])   
    }
  }
  // }   

  const openPost=()=>{
   history.push(`/posts/${post._id}`)
  }
    const Likes=()=>  {
    return(likes.find((like)=>like ===(user?.result?.googleId || user?.result?._id))
      ?(<><ThumbUpAlt fontSize="small"/> &nbsp;{likes.length } </> )
      :(  <><ThumbUpAltOutlined fontSize="small"/>&nbsp;{likes.length} {likes.length ===1 ?"like":"likes"}</>)
    )
    }

    // console.log( user?.result?._id)
    // console.log(post?.Creator)

    return(
    
        <Card className={classes.card} raised elevation={6} >
        <div onClick={openPost} style={{cursor:"pointer"}}   >

            <CardMedia className={classes.media} image={post.SelectedFile} title={post.Title} />
            <div className={classes.overlay}>
              <Typography variant="h6">{post.name}</Typography>
              <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            {(user?.result?.googleId ===post?.Creator || user?.result?._id  === post?.Creator) && (
            <div className={classes.overlay2}>
              <Button style={{color:'white'}} size="small" onClick={()=>{ setCurrentId(post._id)}} >
              <MoreHorizIcon fontSize="default"/>
              
              </Button>
            </div>)}
            <div className={classes.details}>
              <Typography variant="body2" color="textSecondary">{`#${post.Tags}`}</Typography>
            </div>
            <Typography  className={classes.title} variant="h5" gutterBottom>{post.Title}</Typography>
             <CardContent>
              <Typography  variant="body2" color="textsecondary" component="p">{post.Message}</Typography>
             </CardContent>
              </div>
             <CardActions className={classes.cardActions}>
              <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike} >
               <Likes/>
               
              </Button> 
              {(user?.result?.googleId ===post?.Creator || user?.result?._id  === post?.Creator) && (   <Button size="small" color="primary"onClick={()=>distpatch(deletePost(post._id))}>
              <DeleteIcon fontSize="small"/>
              delete
              </Button>)}
              
           

             </CardActions>
          
          </Card>
        
       
    )
}
export default Post