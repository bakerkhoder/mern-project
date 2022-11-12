import express from 'express';
const router= express.Router();
import {getposts} from "../controllers/posts.js"
import {createpost}  from "../controllers/posts.js"


router.get("/",getposts)
router.post("/",createpost)
export default router;