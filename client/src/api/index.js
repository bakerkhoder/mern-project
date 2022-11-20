import axios from "axios"
const API = axios.create({baseURL:'http://localhost:5000'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
      //  req.userId=JSON.parse(localStorage.getItem("profile")).result._id
    }
    return req;
})

export const fetchposts=(page)=> API.get(`/posts?page=${page}`)
//  export const fetchposts=(page)=> API.get(`/posts?page=${page}`);

export const fetchPostsBySearch=(searchQuery)=>API.get(`/posts/search?searchQuery=${searchQuery.search || "none"} &tags=${searchQuery.tags}`)
// then((res)=>{console.log(res.data)
// return res.data}
// )

 export const fetchPost=(id)=>API.get(`/posts/${id.id}`)



 export const createpost=(newpost)=>API.post('/posts',newpost)
 export const updatePost=(id,updatedPost)=>API.patch(`/posts/${id}`,updatedPost)
 export const deletePost=(id)=>API.delete(`/posts/${id}`)
 export const likePost=(id)=>API.patch(`/posts/${id}/likepost`)
 export const comment=(value,id)=>API.post(`/posts/${id}/commentPost`,{value})


 export const signIn=(formData) =>API.post('/user/signin',formData)
 export const signUp=(formData) =>API.post('/user/signup',formData)

