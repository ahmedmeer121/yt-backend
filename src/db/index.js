import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.URL}/${DB_NAME}`)
        console.log(`Database connected successfully
        ${mongoose.connection.host}`);
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }

}

export default connectDb;