import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("connected to the db")
}).catch((error)=>{
    console.log("not connected",error);
});

const app = express();

app.use(express.json());

app.listen(9000,()=>{
    console.log('server is running on port 9000');
})

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);
