import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/dbconfig.js";
import postRoutes from "./routes/postRoutes.js";
import trendingVideosRoutes from "./routes/trendingVideosRoutes.js"; // ✅ Import Trending Videos Routes
import likedVideosRoutes from "./routes/likedVideosRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Serve uploaded videos

// Routes
app.use("/api/trending-videos", trendingVideosRoutes);
app.use("/api/liked-videos", likedVideosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


