import React,{useState} from 'react'
import { Avatar,Button,Paper,Typography,Container, Grid} from '@material-ui/core'
import useStyles from "./styles"
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import Input from './Input'
// import {GoogleLogin} from 'react-google-login'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {signin,signup} from '../../actions/auth'

const initialState={firstname:'',lastname:'',email:'',password:'',confirmpassword:''}

const Auth = () => {
    const classes=useStyles()
    const [showPassword,setShowPassword]=useState(false)
    const [formData,setFormData]=useState(initialState)
    const  history=useHistory()

    const [isSignup ,setIsSignuP]=useState(false) 
    const handleShowPassword=()=>setShowPassword((prevShowPassword)=>!prevShowPassword)
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(formData)
     if(isSignup){
      console.log("b3ata")
        dispatch(signup(formData,history))   
     }else{
        dispatch(signin(formData,history))
        console.log("re7na 3l dispatch") 

     }
    }
    const handleChange=(e)=>{
       setFormData({...formData,[e.target.name]:e.target.value})
    }
    const dispatch= useDispatch()
    const switchMode=()=>{
      setIsSignuP((prevIssignup)=> !prevIssignup)
      setShowPassword(false)    }
    // const googleFailure=(error)=>{
    //   console.log(error) 
    //   console.log("google sign in failed")}

    // const googleSuccess= async(res)=>{
    //   console.log("succes")
    //   const result =res?.profileObj
    //   const token= res?.tokenId
    //   try{
    //     dispatch({type:'AUTH' ,data:{result,token}})
    //     history.push('/')
    //   }
    //   catch(error){
    //     console.log(error)
    //   }
    //  }  
  return (
   <Container component="main" maxWidth="xs">
         <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                 <LockOutlinedIcon/>
            </Avatar>
            <Typography variant='h5' >{isSignup?'Sign Up':"Sign In"}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                 {
                    isSignup && (
                        <>
                        <Input name="firstname" label="firstname" type="text" handleChange={handleChange} autoFocus half/>
                        <Input name="lastname" label="lastname" handleChange={handleChange} half/>

                        </>
                    )
                 }
                 <Input name="email" label="email adress" handleChange={handleChange} type="email" />
                 <Input name="password" label="password" handleChange={handleChange} type={showPassword ? "text":"password"} handleShowPassword={handleShowPassword}/>
                 { isSignup && <Input name="confirmpassword" label="repeat password" handleChange={handleChange} type="password"/>}
           </Grid>
     
           <Button type="submit" fullWidth variant='contained' color="primary" className={classes.submit}>
           {isSignup?'sign up':'sign in'}
           </Button>
                 {/* <GoogleLogin 
           clientId='2768741236-t6tf73mpq5nf8dd717jj206sknhgnr14.apps.googleusercontent.com'
           render={(renderProps)=>(
            <Button className={classes.googleButton} color="primary" fullWidth onCLick={renderProps.onClick} disabled={renderProps.disabled}  variant="contained"  > Google Sign in</Button> )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
           /> */}
           <Grid container justify="flex-end">
             <Grid item>
                <Button onClick={switchMode}>
                         {isSignup?'already have an account':'do not have an account sign up'}
                </Button>
                
             </Grid>
           </Grid>
            </form>
         </Paper>
      </Container>
  )
}

export default Auth
