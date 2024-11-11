import mongoose from "mongoose";

const categorySchmea = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    }
    
},{timestamps:true})

export const Category = mongoose.model("Category", categorySchmea)
