import React, { useEffect, useState } from 'react'
import { Container,Grow,Grid,Paper ,AppBar,TextField,Button} from "@material-ui/core"
import { useHistory,useLocation } from 'react-router-dom';
import ChipInput from "material-ui-chip-input" 
import Posts from "../posts/posts";
import Form from '../form/form';
import Pagination from "../Pagination"
import { useDispatch } from "react-redux";
import { getposts } from  "../../actions/posts"
import useStyles from "./styles"

function useQuery(){
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
 const [currentId,setCurrentId]=useState(null)
    const disptach =useDispatch()
    const query=useQuery()
    const history=useHistory()
    const page =query.get("page") || 1;
    const searchQuery =query.get("searchQuery")
    const classes=useStyles()
    const[search,setSearch]=useState('')
    const[tags,setTags]=useState([])


    useEffect(()=>{
    disptach(getposts())
    },[disptach])

    const handleKeyPress=(e)=>{
      if(e.keyCode===13){
           //search post
      }
    }
 
    const handleAdd=(tag)=>setTags([...tags,tag])
    const handleDelete=(tagToDelete)=> setTags(tags.filter((tag)=>tag !== tagToDelete))

  return (
     <Grow in>
          <Container maxWidth="xl" >
            <Grid container  justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                 <Grid item xs={12} sm={6} md={9}>
                   <Posts  currentId={currentId} setCurrentId={setCurrentId}/>
                 </Grid>
                 <Grid item xs={12} sm={4} md={3}>
                  <AppBar className={classes.appBarSearch} position="static" color="inherit">
                    <TextField name='search'
                     variant='outlined' 
                     label="Search Memories"
                     onKeyPress={handleKeyPress}
                     fullWidth
                     value={search}
                     onChange={(e)=>{
                            setSearch(e.target.value)
                     }}
                     />
                     <ChipInput
                      style={{margin:"10px 0"}}
                      value={tags}
                      onAdd={handleAdd}
                      onDelete={handleDelete}
                      label="seach tags"
                      variant='outlined'
                     
                     />
                   

                  </AppBar>
                   <Form currentId={currentId} setCurrentId={setCurrentId} />
                   <Paper  elevation={6} >
                       <Pagination/>
                   </Paper>
                 </Grid>
            </Grid>
          </Container>
       </Grow>
  )
}

export default Home
