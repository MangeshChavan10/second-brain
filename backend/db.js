const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        minlength:3,
        maxlength:10
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        select:false
    }
},{timestamps:true})

const User = mongoose.model("User",userSchema);

module.exports ={User}