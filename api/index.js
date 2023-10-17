import express from 'express';
import dotenv from 'dotenv'

import connectMongoDb from './connection.js'
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'

dotenv.config();
const app = express();
const PORT = 9000;


//Connection
connectMongoDb(process.env.MONGO).then(()=>{
    console.log("Mongodb conncted!")
}).catch((error)=>{
    console.log("not connected",error);
})

app.use(express.json());

app.listen(PORT,()=>{
    console.log('server is running on port 9000');
})

//Routes
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

//Middlewares
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})
