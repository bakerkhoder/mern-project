import * as api from "../api/index"
import { FETCH_ALL,FETCH_POST, CREATE,DELETE,LIKE,UPDATE,FETCH_BY_SEARCH ,START_LOADING,END_LOADING} from "../constants/actionTypes";
//action creators 

export const getPost=(id)=>async(dispatch)=>{
   try{
        dispatch({type:START_LOADING})
        console.log("mn hon")
        const{data}= await api.fetchPost(id);
        console.log(data)
       await dispatch({type:FETCH_POST,payload:data})
               console.log("hon mtwa2if")

        dispatch({type:END_LOADING})
       console.log("tam")
       
    }
    catch(error){
        console.log(error.message)
    }
}  


export const getposts=(page)=>async(dispatch)=>{
    try{
        dispatch({type:START_LOADING})
        const{data}= await api.fetchposts(page);
       await dispatch({type:FETCH_ALL,payload:data})
        dispatch({type:END_LOADING})

    }
    catch(error){
        console.log(error.message)
    }
}  

export const getPostsBySearch=(searchQuery)=>async(dispatch)=>{
    try{
        dispatch({type:START_LOADING})
        const {data:{data}}= await api.fetchPostsBySearch(searchQuery)
        dispatch({type:FETCH_BY_SEARCH,payload:data})
        dispatch({type:END_LOADING})

    } catch(error) {
        console.lof(error)
    }
}

export const createPost=(post)=> async(dispatch)=>{
    try{
        dispatch({type:START_LOADING})
        const {data}=await  api.createpost(post)
        dispatch({type:CREATE ,payload:data})
    }
    catch(error){
        console.log(error)
    }
}

export const updatePost =(id,post)=> async(dispatch)=>{
    try{
       const {data}=await api.updatePost(id,post)
       dispatch({type:UPDATE,payload :data})
    }
    catch(error){
        console.log(error.message)
    }
}


export const deletePost =(id)=> async (dispatch)=>{
    try{
     await api.deletePost(id)
     dispatch({type:DELETE,payload:id})
    }
    catch(error){
        console.log(error)
    }
}


 export const likePost =(id)=> async (dispatch)=>{
    try{
    const{data}=  await api.likePost(id)
     dispatch({type:LIKE,payload:data})
    }
    catch(error){
        console.log(error)
    }
 }