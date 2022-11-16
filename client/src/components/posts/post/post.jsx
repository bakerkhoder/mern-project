import React from "react";
import useStyles from "./styles"
import {Card,CardActions,CardMedia,Button,Typography,CardContent,} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import moment from 'moment'
import { useDispatch } from "react-redux";
import { deletePost,getposts ,likePost} from "../../../actions/posts";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined"
import posts from "../../../reducers/posts";

// 7el esset licon jiba de8ri w 7eta bfile asssests
const Post=({post,setCurrentId})=>{
    const classes = useStyles()
    const distpatch=useDispatch()
    const user =JSON.parse(localStorage.getItem('profile'))
    //  console.log(post.likes.find((like)=>like ===(user?.result?.googleId || user?.result?._id)))
     function refreshPage() {
    window.location.reload(false);
  }   
    const Likes=()=>  {
    return(post.likes.find((like)=>like ===(user?.result?.googleId || user?.result?._id))
      ?(<><ThumbUpAlt fontSize="small"/> &nbsp;{post.likes.length } </> )
      :(  <><ThumbUpAltOutlined fontSize="small"/>&nbsp;{post.likes.length} {post.likes.length ===1 ?"like":"likes"}</>)
    )
    }


   

    return(
    
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.SelectedFile} title={post.Title} />
            <div className={classes.overlay}>
              <Typography variant="h6">{post.name}</Typography>
              <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
              <Button style={{color:'white'}} size="small" onClick={()=>{ setCurrentId(post._id)}} >
              <MoreHorizIcon fontSize="default"/>
              
              </Button>
            </div>
            <div className={classes.details}>
              <Typography variant="body2" color="textSecondary">{`#${post.Tags}`}</Typography>
            </div>
            <Typography  className={classes.title} variant="h5" gutterBottom>{post.Title}</Typography>
             <CardContent>
              <Typography  variant="body2" color="textsecondary" component="p">{post.Message}</Typography>
             </CardContent>
             <CardActions className={classes.cardActions}>
              <Button size="small" color="primary" disabled={!user?.result} onClick={()=>{distpatch(likePost(post._id))
             setTimeout(distpatch(getposts(), 1000) )
             setTimeout(distpatch(getposts(), 2000) )}} >
               <Likes/>
               
              </Button> 
              
              <Button size="small" color="primary"onClick={()=>distpatch(deletePost(post._id))}>
              <DeleteIcon fontSize="small"/>
              delete
              </Button>

             </CardActions>
          
          </Card>
        
       
    )
}
export default Post