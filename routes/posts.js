import { Router } from "express";
import { deletePost,getPost,getPosts,updatePost,addPost } from "../controller/posts.js";

// create a posts router
const postRouter = Router();

// defining routes
postRouter.post('/posts',addPost);
postRouter.get('/posts',getPosts);
postRouter.get('/posts/:id',getPost);
postRouter.patch('/posts/:id',updatePost);
postRouter.delete('/posts/:id',deletePost);



export default postRouter;