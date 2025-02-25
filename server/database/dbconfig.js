import mongoose from "mongoose";
import dotenv from "dotenv";

<<<<<<< HEAD
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected...");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
=======
dotenv.config();  // Load .env variables

const mongoURI = process.env.MONGO_DB_URL;

if (!mongoURI) {
  console.error("❌ MongoDB URL is missing! Check your .env file.");
  process.exit(1);
}

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });

export default mongoose;
>>>>>>> be1b32f84399704e2d7379320db4288d8d9de829
