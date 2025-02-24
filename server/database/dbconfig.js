import mongoose from "mongoose";
import dotenv from "dotenv";

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
