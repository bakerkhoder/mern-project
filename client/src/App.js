import React from "react";
import { Container,AppBar,Typography,Grow,Grid } from "@material-ui/core";
import Posts from "./components/posts/posts";
import  Form from "./components/form/form"
import memories from "./images/memories1.png"
import useStyles from"./styles"
import { useDispatch } from "react-redux";
import { useEffect ,useState} from "react";
import {getposts} from "./actions/posts"
const App=()=>{
    const [currentId,setCurrentId]=useState(null)
    const classes = useStyles()
    const disptach =useDispatch()
    useEffect(()=>{
    disptach(getposts())
    },[disptach])
    return(
     <Container maxWidth="lg">
       <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center"> My Memories</Typography>
          <img className={classes.image} src={memories} alt="memories" height="60"/>
       </AppBar>
       <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                 <Grid item xs={12} sm={7}>
                   <Posts  currentId={currentId} setCurrentId={setCurrentId}></Posts>
                 </Grid>
                 <Grid item xs={12} sm={4}>
                   <Form currentId={currentId} setCurrentId={setCurrentId} />
                 </Grid>
            </Grid>
          </Container>
       </Grow>
     </Container>
        )
}
export default App;