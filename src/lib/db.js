import mongoose from "mongoose";
const mongoose_URL = "mongodb+srv://admin123:admin123@testing.2bs5tuk.mongodb.net/userDatabase?retryWrites=true&w=majority";

if(!mongoose_URL){
    throw new Error(
        "please define the url enviroment variable"
    )
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {con : null, Promise : null}
}

const connectDB = async () =>{
    if(cached.conn){
        return cached.conn
    }

if(!cached.Promise){
    const opts = {
        bufferCommands : false
    };

    cached.Promise = mongoose.connect(mongoose_URL, opts).then((mongoose) =>{
        return mongoose
    })
}

try {
    cached.con = await cached.Promise;
} catch (error) {
    cached.Promise = null;
    throw error;
}
return cached.conn;
}

export default connectDB;