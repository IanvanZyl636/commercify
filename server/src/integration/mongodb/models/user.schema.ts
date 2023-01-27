import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    type:{
        type:Number,
        required:true
    }    
})