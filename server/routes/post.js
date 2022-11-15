import express from 'express';
const router= express.Router();
import {getposts,createPost,updatedPost,deletePost,likePost} from "../controllers/posts.js"
import auth from "../middleware/auth.js"
router.get("/",getposts)
router.post("/",auth,createPost)
router.patch("/:id",auth,updatedPost)
router.delete("/:id",auth,deletePost)
router.patch('/:id/likepost',auth,likePost)

export default router;