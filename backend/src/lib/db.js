import mongoose from "mongoose";
import {ENV} from "./env.js";

export const connectDB = async() => {
    try{
        if(!ENV.DB_URL){
            throw new Error("DB_URL is not defined in the environment variable");
        }
        const db = await mongoose.connect(ENV.DB_URL);
        console.log("Connected to MongoDB", db.connection.host);
    }catch(error){
        console.error("Error Connecting to MongoDB",error)
        process.exit(0) //0 means Success, 1 means failure.
    }
}