import mongoose from "mongoose";
const userSchema  = new mongoose.Schema({
    username:{
        type:String,
        required:type,
        unique:true,
    },
    email:{
        type:String,
        required:type,
        unique:true,
    },
    password:{
        type:String,
        required:type,
    }
},{timestamp:true});

const User = mongoose.model('User',userSchema);

export default User;