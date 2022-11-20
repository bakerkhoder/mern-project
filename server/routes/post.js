import express from 'express';
const router= express.Router();
import {getposts,createPost,updatedPost,deletePost,likePost,getPostsBySearch ,getPost,commentPost} from "../controllers/posts.js"
import auth from "../middleware/auth.js"
router.get("/",getposts)
router.get('/search',getPostsBySearch)
router.get('/:id',getPost)
router.post("/",auth,createPost)
router.patch("/:id",auth,updatedPost)
router.delete("/:id",auth,deletePost)
router.patch('/:id/likepost',auth,likePost)
router.post('/:id/commentPost',auth,commentPost)


export default router;