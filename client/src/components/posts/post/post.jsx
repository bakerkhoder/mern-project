import React from "react";
import useStyles from "./styles"
import {Card,CardActions,CardMedia,Button,Typography,CardContent,} from "@material-ui/core";
import ThumbUp from "@material-ui/icons/ThumbUpAlt"
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import moment from 'moment'
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";

// 7el esset licon jiba de8ri w 7eta bfile asssests
const Post=({post,setCurrentId})=>{
//    6370787ef6a4d0816fe8236d
    const classes = useStyles()
    const distpatch=useDispatch()
    return(
    
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.SelectedFile} title={post.Title} />
            <div className={classes.overlay}>
              <Typography variant="h6">{post.Creator}</Typography>
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
              <Button size="small" color="primary" >
              <ThumbUp fontSize="small"/>
             
               
              like
            
           
         
              {post.likecount}
             
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