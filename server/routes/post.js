import express from 'express';
const router= express.Router();
import {getposts} from "../controllers/posts.js"
import {createPost}  from "../controllers/posts.js"


router.get("/",getposts)
router.post("/",createPost)
export default router;