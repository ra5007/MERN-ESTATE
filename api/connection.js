import mongoose from "mongoose";

const connectMongoDb = (url) =>{
    return mongoose.connect(url)
}

export default connectMongoDb;