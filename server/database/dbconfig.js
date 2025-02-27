import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // Load environment variables

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL); // ✅ No extra options needed
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error`);
    process.exit(1); // Stop the server if connection fails
  }
};

export default connectDB;


