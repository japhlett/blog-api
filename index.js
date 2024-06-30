import express from "express";
import { dbConnection } from "./config/db.js";
import postRouter from "./routes/post.js";

// creating a server
const blog_api = express();
dbConnection();

// apply middleware
blog_api.use(express.json());

// use routes
blog_api.use(postRouter);


// listening to the blog api
const port = process.env.PORT || 3056;
blog_api.listen(port, () =>{
    console.log(`App listening on port ${port}`);
});

