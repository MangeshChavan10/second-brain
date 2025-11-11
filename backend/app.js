const express = require("express");
const { User } = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
const jwt = require("jsonwebtoken");
dotenv.config();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json());



app.post("/api/v1/signup",async(req,res)=>{
try{
    const {username,password} = req.body;
    if( !username || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    const existingUser = await User.findOne({username});
    if(existingUser){
        return res.status(409).json({message:"Username already exists"});
    }
    const HashedPassword =await bcrypt.hash(password,12);
    const newUser = await User.create({ username, password:HashedPassword });
    res.status(201).json({ 
        success: true, 
        user: newUser });
}catch(error){
    console.log(error.message)
    res.status(500).json({
        message:error.message
    })
}
})

app.post("/api/v1/login",async(req,res)=>{
try{
    const {username,password} = req.body;
    if( !username || !password){
        return res.status(400).json({message:"All fields are required"});
    }

    const user = await User.findOne({username});
    if(!user){
        return res.status(400).json({
            message:"User doesn't exist"
        })
    }
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"});

    res.status(201).json({ 
        success: true, 
        token
    });
}catch(error){
    console.log(error.message)
    res.status(500).json({
        message:error.message
    })
}
})


async function connectDB() {
    const connect = await mongoose.connect(process.env.MONGODB_URI)
    if(connect){
        console.log("Connected to Database");
    }
     app.listen(process.env.PORT,()=>{
    console.log("Listening at PORT:",process.env.PORT)
});

   
}

connectDB();

