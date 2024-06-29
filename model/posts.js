import { Schema,model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const postsSchema = new Schema({
    title:{type:String, unique:true, required:true},
    author:{type:String,required:true},
    content:{type:String,required:true},
    isPublished:{type:Boolean, default:false}
}, {
    timestamps:true
});

// using the jSON package here
postsSchema.plugin(toJSON);

export const postsModel = model('Posts',postsSchema);