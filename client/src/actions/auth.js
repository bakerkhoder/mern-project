import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index"
// import { useHistory } from "react-router-dom";
// const history=useHistory()
export const signin=(formData, history)=> async(dispatch)=>{
  try{
    const {data}= await api.signIn(formData)
    dispatch({type:AUTH,data})
    history.push("/")
  }
  catch(error){
   console.log(error)
  }
}
  export const signup=(formData, history)=> async(dispatch)=>{
  try{ 
    const {data}= await api.signUp(formData)
    dispatch({type:AUTH,data})

    history.push("/")
    console.log("we are in the home")
  }
  catch(error){
   console.log(error)
  }
}