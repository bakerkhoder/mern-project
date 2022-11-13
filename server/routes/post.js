import express from 'express';
const router= express.Router();
import {getposts} from "../controllers/posts.js"
import {createPost}  from "../controllers/posts.js"
import {updatedPost} from"../controllers/posts.js"

router.get("/",getposts)
router.post("/",createPost)
router.patch("./:id",updatedPost)
export default router;