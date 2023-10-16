import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("connected to the db")
}).catch((error)=>{
    console.log("not connected",error);
});

const app = express();
app.listen(3000,()=>{
    console.log('server is running on port 3000');
})