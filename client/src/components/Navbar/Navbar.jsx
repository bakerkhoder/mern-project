import React, { useState ,useEffect} from 'react'
import { AppBar,Toolbar,Typography ,Button,Avatar} from '@material-ui/core'
import memories from "../../images/memories2.png"
import { useDispatch } from 'react-redux'
import useStyles from'./styles'
import { NavLink } from 'react-router-dom'
import { useHistory,useLocation } from 'react-router-dom'
import decode from "jwt-decode"
const Navbar = () => {
    const classes=useStyles()
    const dispatch=useDispatch()
    const history=useHistory()
    const location =useLocation()
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')))
    console.log(user)
    const logout =()=>{
      dispatch({type:'LOGOUT'})
      history.push("/")
      setUser(null)
    }
    useEffect(()=>{
      const token=user?.token

      //// it need to be fixed
        // const decodedToken =decode(token)
        // console.log(decodedToken)
        // if(decodedToken.exp *1000 < new Date().getTime()) logout()
      ///jwt...
      setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])
  return (
       <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Typography className={classes.heading} component={NavLink} to="/" variant="h2" align="center"> My Memories</Typography>
          <img className={classes.image} src={memories} alt="memories" height="60"/>
        </div>
        <Toolbar className={classes.toolbar}>
               {user?(<div className={classes.profile}>
                   <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                   <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                   <Button variant='contained' onClick={logout} className={classes.logout} color="secondary">Lougout</Button>
                 </div>):(
                
                 <Button component={NavLink} to="/auth" variant="contained" color='primary'>Sign in</Button>
                 )}
        </Toolbar>

       </AppBar>
  )
}

export default Navbar
