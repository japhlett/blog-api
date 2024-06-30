import { Router } from "express";
import { deletePost,getPost,getPosts,updatePost,addPost } from "../controller/post.js";

// create a posts router
const postRouter = Router();

// defining routes
postRouter.post('/post',addPost);
postRouter.get('/post',getPosts);
postRouter.get('/post/:id',getPost);
postRouter.patch('/post/:id',updatePost);
postRouter.delete('/post/:id',deletePost);



export default postRouter;