import dbName from './constants.js'
import mongoose from "mongoose";

const dbConnection = async () =>{
    try {

        const connection =  await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`); ;
        console.log("MongoDB connection Successfull!!!!");
        
    } catch (error) {
        console.log("Mongo db connection failes :", error);
        process.exit(1);
    }
}



export default dbConnection;