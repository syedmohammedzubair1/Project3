import mongoose from "mongoose";
import dotenv from "dotenv";

<<<<<<< HEAD
dotenv.config();  // Load .env variables
=======
dotenv.config();  // Load environment variables

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // ✅ No extra options needed
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error`);
    process.exit(1); // Stop the server if connection fails
  }
};

export default connectDB;
>>>>>>> 82ce77e620d138022c4f5a4fc772642eead856a7


<<<<<<< HEAD
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
=======
>>>>>>> 82ce77e620d138022c4f5a4fc772642eead856a7
