import React,{useState} from 'react'
import { Avatar,Button,Paper,Typography,Container, Grid } from '@material-ui/core'
import useStyles from "./styles"
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import Input from './Input'


const Auth = () => {
    const classes=useStyles()
    const [showPassword,setShowPassword]=useState(false)

    const issignup =true
    const handleShowPassword=()=>setShowPassword((prevShowPassword)=>!prevShowPassword)
    const handleSubmit=()=>{}
    const handleChange=()=>{}
    const switchMode=()=>{}
  return (
   <Container component="main" maxWidth="xs">
         <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                 <LockOutlinedIcon/>
            </Avatar>
            <Typography variant='h5' >{issignup?'Sign Up':"Sign In"}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                 {
                    issignup && (
                        <>
                        <Input name="firstname" label="firstname" type="text" handleChange={handleChange} autoFocus half/>
                        <Input name="lastname" label="lastname" handleChange={handleChange} half/>

                        </>
                    )
                 }
                 <Input name="email" label="email adress" handleChange={handleChange} type="email" />
                 <Input name="password" label="password" handleChange={handleChange} type={showPassword ? "text":"password"} handleShowPassword={handleShowPassword}/>
                 { issignup && <Input name="confirmpassword" label="repeat password" handleChange={handleChange} type="password"/>}
           </Grid>


           <Button type="submit" fullWidth variant='contained' color="primary" className={classes.submit}>
           {issignup?'sign up':'sign in'}
           </Button>
           <Grid container justify="flex-end">
             <Grid item>
                <Button onClick={switchMode}>
                         {issignup?'already have an account':'do not have an account sign up'}
                </Button>
                

             </Grid>
           </Grid>
            </form>
         </Paper>
      </Container>
  )
}

export default Auth
