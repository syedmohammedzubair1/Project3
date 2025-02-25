// import express from "express";
// import multer from "multer";
// import path from "path";
// import TrendingVideo from "../models/TrendingVideo.js";

// const router = express.Router();

// // Set up Multer storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Save files in the 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   }
// });

// const upload = multer({ storage: storage });

// // Route to upload a video
// router.post("/upload", upload.single("video"), async (req, res) => {
//   try {
//     const { title, description, category, price, premium } = req.body;
//     const videoUrl = `/uploads/${req.file.filename}`;

//     const newVideo = new TrendingVideo({
//       title,
//       description,
//       category,
//       videoUrl,
//       price,
//       premium
//     });

//     await newVideo.save();
//     res.status(201).json({ message: "Video uploaded successfully", video: newVideo });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error during upload" });
//   }
// });

// // Route to fetch all trending videos
// router.get("/", async (req, res) => {
//   try {
//     const videos = await TrendingVideo.find();
//     res.json(videos);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;
import express from "express";
import { uploadTrendingVideo, getTrendingVideos, deleteTrendingVideo } from "../controllers/trendingVideosController.js";
import upload from "../middleware/multerConfig.js";

const router = express.Router();

router.post("/upload", upload.single("video"), uploadTrendingVideo);
router.get("/", getTrendingVideos);
router.delete("/:id", deleteTrendingVideo);

export default router;
