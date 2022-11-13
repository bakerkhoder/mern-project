import axios from "axios"
const url ="http://localhost:5000/posts"

export const fetchposts=()=>axios.get(url)
// then((res)=>{console.log(res.data)
// return res.data}
// )
 export const createpost=(newpost)=>axios.post(url,newpost)
 export const updatePost=(id,updatedPost)=>axios.patch(`${url}/${id}`,updatedPost)