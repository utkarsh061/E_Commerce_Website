import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        
        console.log(`\n MongoDB Database connected !! DB host:${connect.connection.host}`)
    } catch (error) {
        throw error;
        console.log("Databse unable to connect:",error )
    }
}
export default connectDB;