import mongoose from 'mongoose';

const connectMongoDb = (url) => mongoose.connect(url);

export default connectMongoDb;
