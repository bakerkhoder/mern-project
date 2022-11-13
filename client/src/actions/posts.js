import * as api from "../api/index"
//action creators 

export const getposts=()=>async(dispatch)=>{
    try{
        const{data}= await api.fetchposts();
        dispatch({type:"FETCH_ALL",payload:data})
    
    }
    catch(error){
        console.log(error.message)
    }
}  

export const createPost=(post)=> async(dispatch)=>{
    try{
        const {data}=await  api.createpost(post)
        dispatch({type:'CREATE' ,payload:data})
    }
    catch(error){
        console.log(error)
    }
}

export const updatePost =(id,post)=> async(dispatch)=>{
    try{
       const {data}=await api.updatePost(id,post)
       dispatch({type:'UPDATE',payload :data})
    }
    catch(error){
        console.log(error.message)
    }
}


export const deletePost =(id)=> async (dispatch)=>{
    try{
     await api.deletePost(id)
     dispatch({type:'DELETE',payload:id})
    }
    catch(error){
        console.log(error)
    }
}