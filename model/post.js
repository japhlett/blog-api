import { Schema,model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const postSchema = new Schema({
    title:{type:String, unique:true, required:true},
    author:{type:String,required:true},
    content:{type:String,required:true},
    isPublished:{type:Boolean, default:false}
}, {
    timestamps:true
});

// using the jSON package here
postSchema.plugin(toJSON);

export const postModel = model('Post',postSchema);