import express from 'express';
const router= express.Router();
import {getposts,createPost,updatedPost,deletePost,likePost} from "../controllers/posts.js"

router.get("/",getposts)
router.post("/",createPost)
router.patch("/:id",updatedPost)
router.delete("/:id",deletePost)
router.patch('/:id/likepost',likePost)

export default router;