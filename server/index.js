<<<<<<< HEAD
import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/dbConfig.js"; // ✅ Correct path
import trendingVideosRoutes from "./routes/trendingVideosRoutes.js";
import likedVideosRoutes from "./routes/likedVideosRoutes.js";
import cors from "cors";

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
=======
import dotenv from "dotenv";
dotenv.config();  // Load .env variables before importing anything else

import express from "express";
import cors from "cors";
import "./database/dbconfig.js"; // Ensure MongoDB connection is established

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", (req, res) => {
    res.send(`<h1>Hello Team</h1>`);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`);
});
>>>>>>> be1b32f84399704e2d7379320db4288d8d9de829
