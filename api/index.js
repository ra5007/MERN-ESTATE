import apicache from 'apicache';
/* eslint-disable import/order */
/* eslint-disable import/extensions */
import authRouter from './routes/auth.routes.js';
import connectMongoDb from './connection.js';
import dotenv from 'dotenv';
import express from 'express';
import userRouter from './routes/user.routes.js';

const cache = apicache.middleware;
dotenv.config();
const app = express();
const PORT = 9000;

// Connection
connectMongoDb(process.env.MONGO).then(() => {
  console.log('Mongodb conncted!');
}).catch((error) => {
  console.log('not connected', error);
});

app.use(express.json());
// app.use(cache('500 minutes'));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// Routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

// Middlewares
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
