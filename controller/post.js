import { postModel } from "../model/post.js";


// create a post 

export const addPost = async(req,res,next) =>{
    try {
       const newPost = await postModel.create(req.body);
       res.status(201).send(newPost);
    } catch (error) {
        next(error);
    }
}
// Get all posts
export const getPosts = async(req,res,next) =>{
    try {
        const allPosts = await postModel.find();
        res.status(200).send(allPosts);
    } catch (error) {
        next(error);
    }
}

// Get post by id
export const getPost = async(req,res,next) =>{
    try {
       const post = await postModel.findById(req.params.id) ;
        res.status(200).send(post);
    } catch (error) {
        next(error);
    }
}

// Update the posts 
export const updatePost = async(req,res,next) =>{
    try {
       const published = req.body.isPublished
       console.log('request',published);
        const update = await postModel.findByIdAndUpdate(req.params.id,{isPublished:published});
        res.status(200).send(update);
    } catch (error) {
        next(error);
    }
}

// delete a blog
export const deletePost = async(req,res,next) =>{
    try {
        const deleted = await postModel.findByIdAndDelete(req.params.id);
        res.status(204).send(deleted);
    } catch (error) {
        next(error)
    }
}