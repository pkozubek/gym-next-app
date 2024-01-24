import mongoose from "mongoose";

declare global {
  var mongoose: any
}

const DATABASE_URL = process.env.DATABASE_URL || "";

console.log(DATABASE_URL)

if (!DATABASE_URL) {
    throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
  }
  
  let cached = global.mongoose;
  
  if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
  }
  
  async function connectDB() {
    if (cached.conn) {
      return cached.conn as typeof mongoose;
    }
  
    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
        serverSelectionTimeoutMS: 1000
      };
  
      cached.promise = mongoose.connect(DATABASE_URL, opts).then((mongoose) => {
        return mongoose;
      }).then(() => {
        console.log("connected");
      }).catch(() => console.log("connection error"))
    }
    cached.conn = await cached.promise;

    return cached.conn as typeof mongoose;
  }
  
  export default connectDB;